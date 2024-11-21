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
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Steps } from './payment.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('payment')
@ApiTags('Payment')
@ApiBearerAuth()
@UsePipes(new ValidationPipe())
@UseGuards(JwtAuthGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('shipping')
  @HttpCode(HttpStatus.OK)
  async getShipping() {
    return this.paymentService.shipmentMethod();
  }
  @Post('transaction/info')
  @HttpCode(HttpStatus.OK)
  async getTransaction(@Body('transactionId') transactionId: string) {
    return this.paymentService.transactionById(transactionId);
  }

  @Post('transaction/create')
  @HttpCode(HttpStatus.OK)
  async create(@CurrentUser('id') id: string) {
    return this.paymentService.promocode(id);
  }

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

  @Post('transaction/finish')
  @HttpCode(HttpStatus.OK)
  async finish(@CurrentUser('id') id: string) {
    return this.paymentService.finishTransaction(id);
  }
}
