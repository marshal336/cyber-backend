import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/user';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) { }


  async getNewToken(refreshToken: string) {
    const res = await this.jwt.verifyAsync(refreshToken)
    if (!res) throw new UnauthorizedException('Token must be provided')
    const { password, ...user } = await this.prisma.user.findFirst({
      where: { id: res.userId }
    })
    const tokens = await this.createTokens(user.id)
    return { ...user, ...tokens }
  }

  async createTokens(userId: string) {
    const accessToken = await this.jwt.signAsync({ userId }, {
      expiresIn: '1h'
    })
    const refreshToken = await this.jwt.signAsync({ userId }, {
      expiresIn: '7d'
    })
    return { accessToken, refreshToken }
  }
  async register(data: CreateAuthDto) {
    const exist = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    if (exist) throw new BadRequestException('User already exist!')
    else {
      const { password, ...user } = await this.prisma.user.create({
        data: {
          ...data,
          password: await bcrypt.hash(data.password, 10)
        }
      })
      const tokens = await this.createTokens(user.id)
      await this.prisma.cart.create({
        data: {
          userId: user.id
        }
      })
      if (!user || !tokens) throw new BadRequestException('Whats went wrong!')
      return { ...user, ...tokens }
    }
  }

  async validateUser(email: string, password: string) {
    if (!email || !password) throw new BadRequestException('Invalid password or email')
    else {
      const user = await this.prisma.user.findUnique({ where: { email } })
      if (!user) throw new BadRequestException("User not exist")
      const pass = await bcrypt.compare(password, user.password)
      if (!pass) throw new BadRequestException('Inviled fileds')
      return user
    }
  }
}
