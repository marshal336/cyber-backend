import { IsNumber, IsString, IsDateString } from "class-validator";

export class Memory {
    @IsNumber()
    id: number;

    @IsString()
    memory: string;

    @IsNumber()
    price: number;

    @IsDateString()
    createdAt: string;

    @IsDateString()
    updatedAt: string;
}