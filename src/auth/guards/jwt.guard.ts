import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err, user, info) {
        if (err || !user) {
            if (info && info.message === 'jwt expired') {
                throw new UnauthorizedException('jwt expired');
            }
            throw err || new UnauthorizedException();
        }
        return user;
    }
}