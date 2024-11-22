import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { Steps } from './payment.dto';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  stripe: Stripe;
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.stripe = new Stripe(config.get('STRIPE_SECRET_KEY'));
  }
  async promocode(userId: string, code?: string) {
    try {
      const transaction = await this.prisma.transaction.create({
        data: {
          userId,
          status: 'PENDING',
        },
      });
      if (!transaction) throw new BadRequestException('no transaction');
      return transaction.id;
    } catch (error) {
      throw error;
    }
  }
  async shipmentMethod() {
    return await this.prisma.shipmentMethod.findMany();
  }
  async shipmentMethodById(id: number) {
    if (!id) throw new BadRequestException('No id');
    else return await this.prisma.shipmentMethod.findFirst({ where: { id } });
  }
  async transactionById(id: string) {
    if (!id) throw new BadRequestException('No id');
    else
      return await this.prisma.transaction.findFirst({
        where: { id },
        include: {
          shipmentMethod: true,
          user: {
            include: {
              cart: {
                include: {
                  cartItems: {
                    include: {
                      productItemInfo: {
                        include: {
                          product: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
  }
  async transaction(steps: Steps, userId: string) {
    const { transactionId, ...newSteps } = steps;
    const payment = await this.prisma.transaction.update({
      where: { id: transactionId },
      data: {
        ...newSteps,
      },
    });
    return payment;
  }
  async remove(id: string, transactionId: string) {
    if (!transactionId || typeof transactionId !== 'string')
      throw new BadRequestException('No transactionId');
    await this.prisma.transaction.delete({ where: { id: transactionId } });
    return true;
  }
  async finishTransaction(transactionId: string, userId: string) {
    const payment = await this.transactionById(transactionId);
    const createPayment = await this.stripe.paymentIntents.create({
      amount: payment.user.cart.total * 100,
      currency: 'usd',
    });
    if (!createPayment) throw new BadRequestException('no transaction');
    await this.prisma.transaction.update({
      where: { id: transactionId },
      data: {
        paymentId: createPayment.id,
        status: 'SUCCESS',
      },
    });
    await this.prisma.cartItem.deleteMany({
      where: {
        cart: {
          cartItems: {
            every: {
              id: {
                in: payment.user.cart.cartItems.map(({ id }) => id),
              },
            },
          },
        },
      },
    });
    await this.prisma.cart.update({
      where: { id: payment.user.cart.id },
      data: {
        total: 0,
      },
    });
    return createPayment.client_secret;
  }
}
