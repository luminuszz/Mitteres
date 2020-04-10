import {Entity,PrimaryColumn,Column,ManyToOne,BaseEntity,JoinColumn} from 'typeorm';

import User from '../users/user.entity'

@Entity()
export default class Post extends BaseEntity {
  @PrimaryColumn({ type: 'int' })
  id: number;

  @Column({name:'user_id'})
  userId: number

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(
    () => User,
    user => user.postConnetion,
    { primary: true,cascade:true },
  )
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User>;
}

