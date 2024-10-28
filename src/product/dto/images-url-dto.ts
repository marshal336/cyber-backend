import { IsNumber, IsArray, IsString, IsDateString } from "class-validator";

export class ImagesUrl {
    @IsNumber()
    id: number;

    @IsArray()
    @IsString({ each: true })
    imgUrl: string[];

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}