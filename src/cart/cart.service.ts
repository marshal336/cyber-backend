import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto, ITotalCartSum } from './dto/cart.dto'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    private totalSumCartItem(cartItem: ITotalCartSum[]) {
        const total = cartItem.reduce((prev, current) => {
            return prev + ((current.productItemInfo.price + current.productItemInfo.memory[0].price) * current.quantity)
        }, 0)
        return total
    }
    private async getUserCart(userId: string) {
        let existCart = await this.prisma.cart.findFirst({ where: { userId } })
        if (!existCart) {
            existCart = await this.prisma.cart.create({ data: { userId } })
        }
        return existCart
    }
    private async updateCartUser(userId: string) {
        const userCart = await this.prisma.cart.findFirst({
            where: { userId },
            include: {
                cartItems: {
                    include: {
                        productItemInfo: {
                            include: {
                                product: true,
                                memory: true,
                            }
                        }
                    }
                }
            }
        })
        if (!userCart) return
        const total = this.totalSumCartItem(userCart.cartItems)

        return await this.prisma.cart.update({
            where: {
                id: userCart.id
            },
            data: {
                total,
            },
            include: {
                cartItems: {
                    include: {
                        productItemInfo: {
                            include: {
                                product: true,
                                memory: true
                            }
                        }
                    }
                }
            }
        })
    }
    async createCart(data: CreateCartDto) {
        const userCart = await this.getUserCart(data.userId)
        const productInfo = await this.prisma.productItemInfo.findFirst({ where: { id: data.productInfoId } })
        if (!productInfo) throw new BadRequestException('productInfoId no exist')
        const cartItem = await this.prisma.cartItem.findFirst({
            where: {
                productItemInfo: {
                    id: productInfo.id
                },
                cartId: userCart.id
            },
            include: {
                productItemInfo: {
                    include: {
                        product: true,
                        memory: true
                    },
                },
            }
        })
        if (cartItem) {
            await this.prisma.cartItem.update({
                where: { id: cartItem.id },
                data: {
                    quantity: cartItem.quantity + 1,
                }
            })
        } else {
            await this.prisma.cartItem.create({
                data: {
                    cartId: userCart.id,
                    productItemInfoId: productInfo.id,
                    quantity: 1
                }
            })
        }
        const updateUserCart = await this.updateCartUser(data.userId)
        return updateUserCart

    }
}
