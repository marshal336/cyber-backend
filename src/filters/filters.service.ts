import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FiltersService {
  constructor(
    private prisma: PrismaService
  ) { }

  async getFilters() {
    const [brands, screenType, memorys] = await Promise.all([
      this.prisma.brand.findMany({
        include: { productItemInfo: true }
      }),
      this.prisma.screenType.findMany({
        include: { productItemInfo: true }
      }),
      this.prisma.productItemMemory.findMany({
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true,
          productItemInfo: true
        }
      })
    ]);

    if (!brands.length && !screenType.length && !memorys.length) {
      throw new BadRequestException('No filters');
    }

    return { brands, screenType, memorys };
  }

}
