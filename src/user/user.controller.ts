import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Res,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  UsePipes,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAuthDto, LoginAuthDto } from 'src/auth/dto/user';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IProfileChange } from './dto/create-user.dto';

@Controller('user')
@ApiTags('user')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  @ApiBody({ type: CreateAuthDto })
  @HttpCode(HttpStatus.OK)
  async register(
    @Body() body: CreateAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, accessToken, ...user } =
      await this.userService.register(body);
    this.userService.addRefreshTokenInCookie(res, refreshToken);
    return { ...user, accessToken };
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginAuthDto })
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.createTokens(id);
    this.userService.addRefreshTokenInCookie(res, refreshToken);
    return { ...req.user, accessToken };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  async profile(@Req() req: Request, @CurrentUser('id') id: string) {
    return req.user;
  }

  @Post('profile')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: IProfileChange })
  @ApiBearerAuth()
  async changeProfile(
    @Body() data: IProfileChange,
    @CurrentUser('id') id: string,
  ) {
    const { password, ...user } = await this.userService.changeProfile(
      id,
      data,
    );
    return user;
  }

  @Post('user-cart')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: String })
  async getUserById(@Body() { id }: { id: string }) {
    const cartUser = await this.userService.getUserById(id);
    return cartUser;
  }

  @Delete('logout')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async logout(
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string,
  ) {
    const message = await this.userService.logout(id);
    this.userService.removeRefreshTokenInCookie(res);
    return message;
  }
}
