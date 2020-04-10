import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Post from './post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

    private objectPrivate(data:any){
      const entity = Object.assign(new Post(), data);
      return entity

    }

  public async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();

  }

  public async findByUser(userId:number):Promise<Post[]>{
    return await this.postsRepository.find({ where: { userId } });
   
  
  }
  public async store(data:Post):Promise<Post>{
    return await this.postsRepository.save(this.objectPrivate(data));
  }
}
