import * as bcrypt from 'bcrypt'
import * as crypto from 'crypto'
import { Entity, PrimaryColumn, Column, OneToMany, BaseEntity, BeforeInsert, } from 'typeorm';

import Post from '../posts/post.entity'
@Entity()
export default class User extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: string;

  @Column({ name: 'frist_name' })
  fristName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @BeforeInsert()
  private async inserthash(): Promise<string> {
    return (this.passwordHash = await bcrypt.hash(this.passwordHash, 8));
  }
  

  @OneToMany(
    () => Post,
    post => post.userConnection,
  )
  postConnetion: Promise<Post[]>;
}
