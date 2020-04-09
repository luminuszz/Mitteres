import * as bcrypt from 'bcrypt'
import { Entity, PrimaryColumn, Column, OneToMany, BaseEntity, BeforeInsert } from 'typeorm';

import Post from '../posts/post.entity'
@Entity()
export default class User extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({name:'frist_name'})
  fristName: string;

  @Column({name:'last_name'})
  lastName: string;

  @Column({name:'password_hash'})
  passwordHash: string;

  @OneToMany(
    () => Post,
    post => post.userConnection,
  )
  postConnetion: Promise<Post[]>;

@BeforeInsert()
  async inserthash(){
    this.passwordHash = await bcrypt.hash(this.passwordHash, 8)
  }

}
