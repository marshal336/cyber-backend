import { BadRequestException, Injectable } from '@nestjs/common';
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
