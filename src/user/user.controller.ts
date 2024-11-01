import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpCode, ValidationPipe, UsePipes, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAuthDto, LoginAuthDto } from 'src/auth/dto/user';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { AuthService } from 'src/auth/auth.service';

@Controller('user')
@ApiTags('user')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }

  @Post('register')
  @ApiBody({ type: CreateAuthDto })
  @HttpCode(HttpStatus.OK)
  async register(
    @Body() body: CreateAuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, accessToken, ...user } = await this.userService.register(body)
    this.userService.addRefreshTokenInCookie(res, refreshToken)
    return { ...user, accessToken }
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginAuthDto })
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string
  ) {
    const { accessToken, refreshToken } = await this.authService.createTokens(id)
    this.userService.addRefreshTokenInCookie(res, refreshToken)
    return { ...req.user, accessToken }
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  async profile(
    @Req() req: Request,
    @CurrentUser('id') id: string
  ) {
    return req.user
  }


  @Delete('logout')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async logout(
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string
  ) {
    await this.userService.logout(id)
    this.userService.removeRefreshTokenInCookie(res)
  }

}
