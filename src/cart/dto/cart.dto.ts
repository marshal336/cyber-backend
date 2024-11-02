import { IsNumber, IsString } from "class-validator"
import { CartItem, Product, ProductItemInfo, ProductItemMemory } from '@prisma/client'

export class CreateCartDto {
    @IsNumber()
    productInfoId: number
    @IsString()
    userId: string
}
interface ProductItemInfoAndMemory extends ProductItemInfo {
    memory: ProductItemMemory[]
}
export interface ITotalCartSum extends CartItem {
    productItemInfo: ProductItemInfoAndMemory
}
