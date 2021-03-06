import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { MenuDto, createMenuDto } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  async findAll(): Promise<MenuDto[]> {
    return await this.menuRepository.find();
  }

  async createMenu(menuDto: createMenuDto): Promise<Menu> {
    const menu = new Menu();
    menu.menuName = menuDto.menuName;
    menu.parentId = menuDto.parentId;
    menu.sort = menuDto.sort;
    return await this.menuRepository.save(menu);
  }

  async remove(id: string): Promise<Menu> {
    const menuRemove = await this.menuRepository.findOne(id);
    return await this.menuRepository.remove(menuRemove);
  }

  async update(id: string, menuDto: createMenuDto): Promise<Menu> {
    const menu = await this.menuRepository.findOne(id);
    menu.menuName = menuDto.menuName;
    menu.parentId = menuDto.parentId;
    menu.sort = menuDto.sort;
    return await this.menuRepository.save(menu);
  }
}
