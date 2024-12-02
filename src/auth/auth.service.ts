import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthDto, Location } from './dto/user';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) { }

  async getUserLocation() {
    try {
      const token = this.config.get<string>('IP_INFO_SECRET');
      const data = (await (
        await fetch(`https://ipinfo.io/?token=${token}`)
      ).json()) as Location;
      if (!data) throw new BadRequestException('Whats went wrong');
      else return data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async validAccessToken(accessToken: string) {
    if (!accessToken) throw new BadRequestException('no accessToken');
    try {
      const res = (await this.jwt.verifyAsync(accessToken)) as any;
      if (!res.userId) return 'invalid token';
      return res.userId;
    } catch (error) {
      return error.message;
    }
  }

  async getNewToken(refreshToken: string) {
    const res = await this.jwt.verifyAsync(refreshToken);
    if (!res) throw new UnauthorizedException('Token must be provided');
    const { password, ...user } = await this.prisma.user.findFirst({
      where: { id: res.userId },
    });
    const tokens = await this.createTokens(user.id);
    return { ...user, ...tokens };
  }

  async createTokens(userId: string) {
    const accessToken = await this.jwt.signAsync(
      { userId },
      {
        expiresIn: '1h',
      },
    );
    const refreshToken = await this.jwt.signAsync(
      { userId },
      {
        expiresIn: '7d',
      },
    );
    return { accessToken, refreshToken };
  }
  async register(data: CreateAuthDto) {
    const exist = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    const { city, country } = await this.getUserLocation();
    if (exist) throw new BadRequestException('User already exist!');
    else {
      const { password, ...user } = await this.prisma.user.create({
        data: {
          ...data,
          city,
          country,
          password: await bcrypt.hash(data.password, 10),
        },
      });
      const tokens = await this.createTokens(user.id);
      await this.prisma.cart.create({
        data: {
          userId: user.id,
        },
      });
      if (!user || !tokens) throw new BadRequestException('Whats went wrong!');
      return { ...user, ...tokens };
    }
  }

  async validateUser(email: string, password: string) {
    if (!email || !password)
      throw new BadRequestException('Invalid password or email');
    else {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) throw new BadRequestException('User not exist');
      const pass = await bcrypt.compare(password, user.password);
      if (!pass) throw new BadRequestException('Inviled fileds');
      return user;
    }
  }
}
