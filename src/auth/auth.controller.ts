import {
  Controller,
  Post,
  ValidationPipe,
  UsePipes,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserService } from 'src/user/user.service';

@Controller('auth')
@ApiTags('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Post('login/access-token')
  @HttpCode(HttpStatus.OK)
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshTokenInCookie = req.cookies[this.userService.refreshToken]
    if (!refreshTokenInCookie) {
      this.userService.removeRefreshTokenInCookie(res);
      throw new UnauthorizedException('You are not Login');
    }
    const { refreshToken, ...user } =
      await this.authService.getNewToken(refreshTokenInCookie);
    this.userService.addRefreshTokenInCookie(res, refreshToken);
    return user;
  }

  @Post('access-token')
  @HttpCode(HttpStatus.OK)
  async validAccessToken(@Body() { accessToken }: { accessToken: string }) {
    const valid = await this.authService.validAccessToken(accessToken);
    return valid;
  }
  @Get('location')
  @HttpCode(HttpStatus.OK)
  async location() {
    return await this.authService.getUserLocation();
  }
}
