import { Controller,Post, Body,Get,UseGuards} from '@nestjs/common';

import { JwtStrategy } from '../auth/jwt.strategy';
import {UserDto} from '../interfaces/UserInterfae'
import {UsersService} from './users.service'


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @UseGuards(JwtStrategy)
  @Get()
  public async index() {
    
    return await this.usersService.findAll();
  }

  @Post()
  public async store(@Body() UserDto: UserDto) {
    return await this.usersService.store(UserDto);
  }
}