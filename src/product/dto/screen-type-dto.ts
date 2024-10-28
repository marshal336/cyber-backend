import { IsNumber, IsArray, IsString, IsDateString } from "class-validator";

export class ScreenTypeDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}