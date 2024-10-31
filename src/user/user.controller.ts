import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, HttpCode, ValidationPipe, UsePipes, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateAuthDto } from 'src/auth/dto/user';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user')
@ApiTags('user')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(private readonly userService: UserService) { }

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

  @Delete('logout')
  @UseGuards(AuthGuard('jwt'))
  async logout(
    @Res({ passthrough: true }) res: Response,
    @CurrentUser('id') id: string
  ) {
    await this.userService.logout(id)
    this.userService.removeRefreshTokenInCookie(res)
  }

}
