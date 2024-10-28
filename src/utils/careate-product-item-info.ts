import { Prisma } from "@prisma/client";

export function randomPrice(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function createProductItemInfo({
    ...data
}: Omit<Prisma.ProductItemInfoUncheckedCreateInput, 'price'>) {
    return {
        price: randomPrice(1100, 1500),
        ...data
    } as Prisma.ProductItemInfoUncheckedCreateInput
}