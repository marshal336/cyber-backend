import { Brand, ProductItemColors, ProductItemImages, ProductItemMemory, ScreenType } from "@prisma/client";
import { IsString, IsArray, IsOptional, IsNumber } from "class-validator";
import { Product } from "./product-dto";

export class ProductItemInfo {
    @IsNumber()
    id: number;

    @IsString()
    screenSize: string;

    @IsString()
    CPU: string;

    @IsString()
    cores: number;

    @IsString()
    mainCamera: string;

    @IsString()
    frontCamera: string;

    @IsString()
    battery: number;

    @IsString()
    screenTypeId: number;

    @IsString()
    brandId: number;

    @IsString()
    productId: number;

    @IsString()
    price: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    screenResolution: string;

    @IsString()
    createdAt: string;

    @IsString()
    updatedAt: string;

    @IsArray()
    colors: ProductItemColors[];

    @IsArray()
    memory: ProductItemMemory[];

    @IsArray()
    brand: Brand;

    @IsArray()
    imagesUrl: ProductItemImages[];

    product: Product;

    screenType: ScreenType;
}

