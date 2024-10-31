import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { CreateAuthDto } from 'src/auth/dto/user';
import { Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private readonly authService: AuthService,
        private readonly prisma: PrismaService
    ) { }

    refreshToken = 'refreshToken'

    async register(data: CreateAuthDto) {
        if (!data) throw new BadRequestException('Invalid data')
        return await this.authService.register(data)
    }
    async logout(id: string) {
        if (!id) throw new BadRequestException('Whats wents wrong')
        else await this.prisma.user.delete({ where: { id } })
    }
    async findById(id: string) {
        if (!id) throw new BadRequestException('No userId')
        const user = await this.prisma.user.findFirst({ where: { id } })
        return user
    }
    addRefreshTokenInCookie(res: Response, token: string) {
        res.cookie(this.refreshToken, token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: 7 * 60 * 60 * 60
        })
    }
    removeRefreshTokenInCookie(res: Response) {
        res.cookie(this.refreshToken, '', { maxAge: Date.now() })
    }
}
