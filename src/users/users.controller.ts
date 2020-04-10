import { Controller,Post, Body,Get,UseGuards} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {UserDto} from '../interfaces/UserInterfae'
import {UsersService} from './users.service'

   @UseGuards(JwtAuthGuard)
   @Controller('users')
   export class UsersController {
     constructor(private usersService: UsersService) {}

     @Get('/find')
     public async index() {
       return await this.usersService.findAll();
     }
     
     @Post('/create')
     public async store(@Body() UserDto: UserDto) {
       return await this.usersService.store(UserDto);
     }
   }