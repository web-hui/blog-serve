import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 20 })
  username: string;

  @Column('text')
  password: string;

  @Column('text')
  role: string;

  @CreateDateColumn()
  createTime: number;

  @UpdateDateColumn()
  updateTime: number;
}
