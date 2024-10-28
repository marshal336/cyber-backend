import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/user';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

}
