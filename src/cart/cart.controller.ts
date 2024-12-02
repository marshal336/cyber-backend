import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, HttpCode, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto, PlusOrMinus, RemoveCartDto } from './dto/cart.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../auth/decorators/user.decorator';


@Controller('cart')
@ApiTags('Cart')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class CartController {
  constructor(private readonly cartService: CartService) { }


  @Get('')
  @HttpCode(HttpStatus.OK)
  getCart(
    @CurrentUser('id') userId: string
  ) {
    return this.cartService.getCart(userId)
  }

  @Post('')
  @ApiBody({ type: CreateCartDto })
  @HttpCode(HttpStatus.OK)
  create(
    @Body() data: CreateCartDto,
    @CurrentUser('id') userId: string
  ) {
    return this.cartService.createCart({ ...data, userId })
  }

  @Put('minus|plus')
  @ApiBody({ type: PlusOrMinus })
  @HttpCode(HttpStatus.OK)
  plusOrMinus(
    @Body() data: CreateCartDto,
    @CurrentUser('id') userId: string
  ) {
    return this.cartService.plusOrMinus({ ...data, userId })
  }

  @Delete('')
  @ApiBody({ type: RemoveCartDto })
  @HttpCode(HttpStatus.OK)
  remove(
    @Body() data: RemoveCartDto,
    @CurrentUser('id') userId: string
  ) {
    return this.cartService.remove({ ...data, userId })
  }
}
