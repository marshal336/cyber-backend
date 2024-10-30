import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FindProductByArgs, FindProductBySearchParams } from './dto/product-dto';

@ApiTags('Products')
@UsePipes(new ValidationPipe())
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('')
  @ApiOperation({ summary: 'Get all products' })
  @HttpCode(HttpStatus.OK)
  findAllProducts() {
    return this.productService.findAllProducts()
  }

  @Get('by-title')
  @ApiOperation({ summary: 'Get all by title' })
  @HttpCode(HttpStatus.OK)
  @ApiQuery({ name: 'title', required: false, type: String })
  findAllProductsByNames(@Query('title') title: string) {
    return this.productService.findAllProductsByNames(title)
  }

  @Get('/new-arrival')
  @ApiOperation({ summary: 'Get all by new arrial' })
  @HttpCode(HttpStatus.OK)
  getByNewArrival() {
    return this.productService.getByNewArrival()
  }

  @Get('/best-seller')
  @ApiOperation({ summary: 'Get all by best seller' })
  @HttpCode(HttpStatus.OK)
  getByBestSeller() {
    return this.productService.getByBestSeller()
  }

  @Get('/find-by')
  @ApiOperation({ summary: 'Get product by search params ' })
  @HttpCode(HttpStatus.OK)
  @ApiQuery({ name: 'brandId', required: false, type: String })
  @ApiQuery({ name: 'memory', required: false, type: String })
  @ApiQuery({ name: 'screenType', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: String })
  findProductByQuery(
    @Query() data: FindProductBySearchParams,) {
    return this.productService.findProductByQuery(data)
  }


  @Post('')
  @ApiOperation({ summary: 'Get product by args' })
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: FindProductByArgs, })
  findById(@Body() body: FindProductByArgs) {
    return this.productService.findProductByArgs(body)
  }

  @Get('/category/:category')
  @ApiOperation({ summary: 'Get product by category' })
  @HttpCode(HttpStatus.OK)
  @ApiParam({ type: String, name: 'category' })
  getByCategory(@Param('category') category: string) {
    return this.productService.getByCategory(category)
  }

}
