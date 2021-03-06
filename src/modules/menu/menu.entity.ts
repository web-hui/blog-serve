import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 20 })
  menuName: string;

  @Column('text')
  sort: string;

  @Column()
  parentId: number;

  @CreateDateColumn()
  createTime: number;

  @UpdateDateColumn()
  updateTime: number;
}
