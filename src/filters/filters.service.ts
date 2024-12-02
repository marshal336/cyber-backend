import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FiltersService {
  constructor(
    private prisma: PrismaService
  ) { }

  async getFilters() {
    const filters = await this.prisma.$transaction(async () => {
      const brands = await this.prisma.brand.findMany({
        include: {
          productItemInfo: true
        }
      })
      const screenType = await this.prisma.screenType.findMany({
        include: {
          productItemInfo: true
        }
      })
      const memorys = await this.prisma.productItemMemory.findMany({
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true,
          productItemInfo: true
        },
      })
      return {
        brands,
        screenType,
        memorys,
      }
    })
    if (!filters) throw new BadRequestException('no filters')
    return filters
  }
}
