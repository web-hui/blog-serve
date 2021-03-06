import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { menuController } from './menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menu])],
  providers: [MenuService],
  exports: [MenuService],
  controllers: [menuController],
})
export class MenuModule {}
