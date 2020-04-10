import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';

import {UserDto} from '../interfaces/UserInterfae'
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtServices: JwtService,
  ) {}

  public async validateUser(fristName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(fristName);
    const pass = await bcrypt.compare(password, user.passwordHash);
    if (user && pass) {
      const { passwordHash, ...result } = user;

      return result;
    }
    return null;
  }

  public async login(user: UserDto) {
    const payload = { userName: user.fristName, sub: user.id };

    return {
      token: this.jwtServices.sign(payload)
    }
  }
}
