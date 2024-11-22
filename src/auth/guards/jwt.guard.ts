import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err) {
      throw new UnauthorizedException(err.message);
    }

    if (!err && !!user && !info) {
      return user;
    }

    if (info?.message === 'No auth token') {
      throw new UnauthorizedException();
    }
    if (info?.message === 'jwt expired') {
      throw new UnauthorizedException('jwt expired');
    }

    throw new UnauthorizedException();
  }
}
