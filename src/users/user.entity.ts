import * as bcrypt from 'bcrypt';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';

import Post from '../posts/post.entity';
@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

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

    @OneToMany(()=> Post, post => post.userConnection)
    postConnection: Promise<Post[]>
  
}
