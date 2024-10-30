import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindProductByArgs, FindProductBySearchParams } from './dto/product-dto';

@Injectable()
export class ProductService {

  constructor(
    private prisma: PrismaService
  ) { }

  async getByNewArrival() {
    const products = await this.prisma.product.findMany({
      orderBy: {
        createdAt: 'asc'
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true,
          }
        },
        category: true,
        memory: true,
        colors: true,
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async getByBestSeller() {
    const products = await this.prisma.product.findMany({
      orderBy: {
        bestSeller: 'desc'
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true,
          }
        },
        category: true,
        memory: true,
        colors: true,
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findAllProducts() {
    const products = await this.prisma.product.findMany({
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true,
          }
        },
        category: true,
        memory: true,
        colors: true,
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findAllProductsByNames(title: string) {
    const products = await this.prisma.product.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive'
        }
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true,
          }
        },
        category: true,
        colors: true,
        memory: true
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async getByCategory(caregoryName: string) {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          title: {
            contains: caregoryName,
            mode: 'insensitive'
          }
        }
      },
      orderBy: {
        id: 'asc'
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true
          }
        },
        category: true
      },
    })
    if (!products) throw new BadRequestException('No product')
    return products
  }

  async findProductByArgs({ title, color, memory }: FindProductByArgs) {

    const product = await this.prisma.productItemInfo.findFirst({
      where: {
        product: {
          title: {
            contains: title,
            mode: 'insensitive'
          }
        },
        memory: {
          every: {
            title: memory
          }
        },
        colors: {
          every: {
            title: {
              contains: color,
              mode: 'insensitive'
            }
          }
        }
      },
      include: {
        colors: true,
        memory: true,
        brand: true,
        imagesUrl: true,
        product: {
          include: {
            colors: true,
            memory: true,
            category: true
          }
        },
        screenType: true
      }
    })

    const totalPrice = product.price + product.memory[0].price
    if (!product) throw new BadRequestException('No product')
    return { ...product, totalPrice }
  }

  async findProductByQuery(data: FindProductBySearchParams,) {
    const brandId = data.brandId?.split(',').map(Number)
    const memoryId = data.memory?.split(',').map(Number)
    const screenTypeId = data.screenType?.split(',').map(Number)

    if (+data.page <= 0 || !+data.page) throw new BadRequestException('invalid')

    const product = await this.prisma.product.findMany({
      skip: (+data.page - 1) * 8,
      take: 8,
      where: {
        productItemInfo: {
          every: {
            brandId: {
              in: brandId
            },
            screenType: {
              id: { in: screenTypeId }
            },
            memory: {
              some: {
                id: { in: memoryId }
              }
            }
          }
        },
      },
      include: {
        productItemInfo: {
          include: {
            colors: true,
            memory: true
          }
        },
        category: true,
        colors: true,
        memory: true
      },
    })
    const count = await this.prisma.product.count({
      where: { id: { in: product.map(({ id }) => id) } }
    })

    if (!product) throw new BadRequestException('No product by this params')

    return product
  }
}
