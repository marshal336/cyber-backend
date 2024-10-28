import { IsNumber, IsString, IsDateString } from "class-validator";

export class Color {
    @IsNumber()
    id: number;

    @IsString()
    color: string;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}