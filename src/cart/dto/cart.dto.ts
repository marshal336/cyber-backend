import { IsIn, IsNumber, IsOptional, IsString } from "class-validator"
import { CartItem, Product, ProductItemInfo, ProductItemMemory } from '@prisma/client'

export class CreateCartDto {
    @IsNumber()
    productInfoId: number
    @IsString()
    userId: string
    @IsString()
    @IsIn(['minus', 'plus'])
    @IsOptional()
    type?: 'minus' | 'plus'
    @IsNumber()
    @IsOptional()
    quantity?: number
    @IsString()
    @IsOptional()
    cartItemId?: string
}
export class RemoveCartDto {
    @IsString()
    userId: string

    @IsString()
    @IsOptional()
    cartItemId?: string
}
interface ProductItemInfoAndMemory extends ProductItemInfo {
    memory: ProductItemMemory[]
}
export interface ITotalCartSum extends CartItem {
    productItemInfo: ProductItemInfoAndMemory
}
