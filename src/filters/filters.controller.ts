import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('filters')
@ApiTags('Filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) { }

  @Get('')
  getBrands() {
    return this.filtersService.getFilters()
  }

}
