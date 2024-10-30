import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category, ProductItemColors, ProductItemMemory } from '@prisma/client';


export class Product {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsNumber()
    bestSeller: number;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    colorId: number;

    @IsNumber()
    discount: number;

    @IsString()
    defaultImage: string;

    @IsString()
    createdAt: string;

    @IsString()
    updatedAt: string;

    @IsArray()
    colors: ProductItemColors[];

    @IsArray()
    memory: ProductItemMemory[];

    category: Category;
}

export class FindProductBySearchParams {
    @IsString()
    @IsOptional()
    brandId?: string

    @IsOptional()
    screenType?: string

    @IsString()
    @IsOptional()
    memory?: string

    @IsString()
    page: string

}

export class FindProductByArgs {
    @IsString()
    title: string
    @IsString()
    memory: string
    @IsString()
    color: string
}