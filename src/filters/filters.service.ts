import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FiltersService {
  constructor(
    private prisma: PrismaService
  ) { }

  async getFilters() {
    const brands = await this.prisma.brand.findMany()
    const screenType = await this.prisma.screenType.findMany()
    const memorys = await this.prisma.productItemMemory.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true
      }
    })
    if (!memorys) throw new BadRequestException('no memorys')
    if (!screenType) throw new BadRequestException('no screen types')
    if (!brands) throw new BadRequestException('no brands')
    return { brands, screenType, memorys }
  }
}
