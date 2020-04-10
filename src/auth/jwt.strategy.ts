import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { jwtConstants } from './constants';

interface PayloadDto {
  userName: string;
  sub: string;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secretKey,
    });
  }

  public async validate(payload: PayloadDto): Promise<any> {
    return {
      userId: payload.sub,
      userName: payload.userName,
    };
  }
}
