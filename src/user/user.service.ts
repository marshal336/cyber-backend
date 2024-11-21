import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateAuthDto } from 'src/auth/dto/user';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { IProfileChange } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  refreshToken = 'refreshToken';
  async changeProfile(id: string, data: IProfileChange) {
    if (!id) throw new BadRequestException('No id');
    const user = await this.findById(id);
    if (!user) throw new BadRequestException('No user');
    return await this.prisma.user.update({
      where: { id: user.id },
      data,
    });
  }
  async register(data: CreateAuthDto) {
    if (!data) throw new BadRequestException('Invalid data');
    return await this.authService.register(data);
  }
  async logout(id: string) {
    if (!id) throw new BadRequestException('Whats wents wrong');
    else await this.prisma.user.delete({ where: { id } });
    return true;
  }
  async findById(id: string) {
    if (!id) throw new BadRequestException('No userId');
    const user = await this.prisma.user.findFirst({ where: { id } });
    return user;
  }
  async getUserById(id: string) {
    if (!id || typeof id !== 'string')
      throw new BadRequestException('No userId');
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: {
        cart: {
          include: {
            cartItems: true,
          },
        },
      },
    });
    return user.cart ? user.cart.cartItems.length : 0;
  }
  addRefreshTokenInCookie(res: Response, token: string) {
    res.cookie(this.refreshToken, token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 7 * 60 * 60 * 60 * 1000,
    });
  }
  removeRefreshTokenInCookie(res: Response) {
    res.cookie(this.refreshToken, '', { maxAge: Date.now() });
  }
}