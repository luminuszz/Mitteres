import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Entity } from 'typeorm';

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
  private privateObject(data:any){
   const  entity =  Object.assign(new User(), data)
   return entity
      
  }

  public async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  

  public async findOne(value: string): Promise<User> {
  
    return await this.usersRepository.findOne(
      this.privateObject({ fristName: value }),
    );
  }

  public async store(data: UserDto): Promise<User> {
   
    return await this.usersRepository.save(this.privateObject(data));
  }
}

