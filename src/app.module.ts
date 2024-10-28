import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true }),
    FiltersModule
  ],
})
export class AppModule { }
