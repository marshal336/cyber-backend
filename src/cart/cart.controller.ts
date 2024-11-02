import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/cart.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/decorators/user.decorator';


@Controller('cart')
@ApiTags('cart')
@ApiBearerAuth()
export class CartController {
  constructor(private readonly cartService: CartService) { }

  // {
  //   "productId": 2,
  //   "productInfoId": 5,
  //   }
  @Post('')
  @ApiBody({ type: CreateCartDto })
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() data: CreateCartDto,
    @CurrentUser('id') userId: string
  ) {
    return this.cartService.createCart({ ...data, userId })
  }
}
