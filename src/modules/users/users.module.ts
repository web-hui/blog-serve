import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [userController],
})
export class UsersModule {}
