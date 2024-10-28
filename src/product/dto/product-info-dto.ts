import { IsNumber, IsString, IsDateString, IsArray, IsOptional } from "class-validator";
import { Color } from "./color-dto";
import { Memory } from "./memory-dto";
import { ImagesUrl } from "./images-url-dto";
import { ScreenTypeDto } from "./screen-type-dto";

export class ProductItemInfo {
    @IsNumber()
    id: number;

    @IsString()
    screenSize: string;

    @IsString()
    CPU: string;

    @IsString()
    brand: string;

    @IsString()
    screenType: ScreenTypeDto;

    @IsNumber()
    productId: number;

    @IsNumber()
    price: number;

    @IsString()
    mainCamera: string;

    @IsString()
    frontCamera: string;

    @IsNumber()
    battery: number;

    @IsString()
    description: string;

    @IsString()
    screenResolution: string;

    @IsNumber()
    cores: number;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;

    @IsArray()
    @IsOptional()
    colors?: Color[];

    @IsArray()
    @IsOptional()
    memory?: Memory[];

    @IsArray()
    @IsOptional()
    imagesUrl?: ImagesUrl[];
}

