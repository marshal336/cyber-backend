import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards, Req, Res, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { LoginAuthDto } from './dto/user';
import { CurrentUser } from './decorators/user.decorator';
import { UserService } from 'src/user/user.service';

@Controller('auth')
@ApiTags('auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  @Post('login/access-token')
  @HttpCode(HttpStatus.OK)
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshTokenInCookie = req.cookies[this.userService.refreshToken]
    if (!refreshTokenInCookie) {
      this.userService.removeRefreshTokenInCookie(res)
      throw new UnauthorizedException('Refresh token no passed')
    }
    const { refreshToken, ...user } = await this.authService.getNewToken(refreshTokenInCookie)
    this.userService.addRefreshTokenInCookie(res, refreshToken)
    return user
  }

}
