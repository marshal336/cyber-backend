import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { User } from "@prisma/client";


export const CurrentUser = createParamDecorator(
    (data: keyof User, context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest()
        return req.user ? req.user[data] : req
    })