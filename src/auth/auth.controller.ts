import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes, UseGuards, Req, Res } from '@nestjs/common';
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

  @Post('login')
  @UseGuards(AuthGuard('local'))
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

}
