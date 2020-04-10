import { Controller, Request,Post,UseGuards } from '@nestjs/common';

import {AuthService} from './auth/auth.service'
import {LocalAuthGuard} from './auth/local-auth.guard'

@Controller()
export class AppController {
  constructor(private authService:AuthService){}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  public async login(@Request() req) {
    console.log('dsad')
    return this.authService.login(req.user)
  }

  


}
