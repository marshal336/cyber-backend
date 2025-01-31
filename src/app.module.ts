import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from './filters/filters.module';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PrismaModule,
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true }),
    FiltersModule,
    CartModule,
    PaymentModule,
  ],
  controllers: [AppController]
})
export class AppModule { }
