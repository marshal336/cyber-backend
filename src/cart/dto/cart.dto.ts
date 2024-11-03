import { IsIn, IsNumber, IsOptional, IsString } from "class-validator"
import { CartItem, Product, ProductItemInfo, ProductItemMemory } from '@prisma/client'
import { ApiProperty } from "@nestjs/swagger"

export class CreateCartDto {
    @IsNumber()
    @ApiProperty({ default: 1 })
    productInfoId: number
    @IsString()
    userId: string
}
export class PlusOrMinus {
    @IsString()
    userId: string

    @IsString()
    @IsIn(['minus', 'plus'])
    @ApiProperty({ default: 'plus' })
    @IsOptional()
    type?: 'minus' | 'plus'

    @IsString()
    @ApiProperty({ default: 'dsdsdsdsd' })
    @IsOptional()
    cartItemId?: string
}
export class RemoveCartDto {
    @IsString()
    userId: string

    @IsString()
    @IsOptional()
    @ApiProperty({ default: 'dsdsd' })
    cartItemId?: string
}
interface ProductItemInfoAndMemory extends ProductItemInfo {
    memory: ProductItemMemory[]
}
export interface ITotalCartSum extends CartItem {
    productItemInfo: ProductItemInfoAndMemory
}
