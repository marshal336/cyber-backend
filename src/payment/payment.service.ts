import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import Stripe from 'stripe';
import { Steps } from './payment.dto';

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
    const transaction = await this.prisma.transaction.create({
      data: {
        userId,
        status: 'PENDING',
      },
    });
    return transaction.id;
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
  async finishTransaction(userId: string) {}
}
