import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { Steps } from './payment.dto';
import { CurrentUser } from '../auth/decorators/user.decorator';

@Controller('payment')
@ApiTags('Payment')
@ApiBearerAuth()
@UsePipes(new ValidationPipe())
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Get('shipping')
  @HttpCode(HttpStatus.OK)
  async getShipping() {
    return this.paymentService.shipmentMethod();
  }
  @UseGuards(JwtAuthGuard)
  @Post('transaction/info')
  @HttpCode(HttpStatus.OK)
  async getTransaction(@Body('transactionId') transactionId: string) {
    return this.paymentService.transactionById(transactionId);
  }
  @UseGuards(JwtAuthGuard)
  @Post('transaction/create')
  @HttpCode(HttpStatus.OK)
  async create(@CurrentUser('id') id: string) {
    return this.paymentService.promocode(id);
  }
  @UseGuards(JwtAuthGuard)
  @Put('transaction/update')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Steps })
  async update(@Body() steps: Steps, @CurrentUser('id') id: string) {
    return this.paymentService.transaction(steps, id);
  }

  @Delete('transaction/remove')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Steps })
  async remove(
    @CurrentUser('id') id: string,
    @Body('transactionId') transactionId: string,
  ) {
    return this.paymentService.remove(id, transactionId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('transaction/finish')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: String })
  async finish(
    @Body('transactionId') transactionId: string,
    @CurrentUser('id') id: string,
  ) {
    return this.paymentService.finishTransaction(transactionId, id);
  }
}
