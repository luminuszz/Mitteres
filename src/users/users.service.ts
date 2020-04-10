import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {UserDto} from '../interfaces/UserInterfae'
import  User  from './user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async findFullName(firstName: string, Lastname: string) {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('user.fristName = :fristName', { firstName })
      .andWhere('user.lastName = :lastName', { Lastname })
      .getMany();
  }

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  public async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  public async store(data: UserDto): Promise<User> {
    const entity  =  Object.assign(new User(),data)
    return await this.usersRepository.save(entity);
  }
}
