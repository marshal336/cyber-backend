import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (info && info.message === 'jwt expired') {
      throw new UnauthorizedException('jwt expired');
    }
    return user;
  }
}
