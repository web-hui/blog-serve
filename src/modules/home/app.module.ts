import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import database from '../../config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { MenuModule } from '../menu/menu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(database),
    UsersModule,
    AuthModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
