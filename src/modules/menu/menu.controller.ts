import {
  Controller,
  Get,
  UseGuards,
  Body,
  Delete,
  Post,
  Param,
  Put,
  HttpCode,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiHeader,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { returnModule, filterReturnData } from '../../common/utils';
import { MenuDto, createMenuDto, returnMenuDto } from './menu.dto';

@ApiBearerAuth()
@ApiTags('菜单接口')
@Controller('menu')
export class menuController {
  constructor(private readonly menuService: MenuService) {}

  @ApiOperation({ summary: '获取菜单列表' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnMenuDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Get()
  async findAll(): Promise<returnModule<MenuDto[]>> {
    const data = await this.menuService.findAll();
    return filterReturnData({ data });
  }

  @ApiOperation({ summary: '添加菜单' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnMenuDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Post()
  @HttpCode(200)
  async createMenu(
    @Body() menuDto: createMenuDto,
  ): Promise<returnModule<MenuDto>> {
    try {
      const data = await this.menuService.createMenu(menuDto);
      return filterReturnData({
        message: '创建成功',
        data,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '菜单已存在',
      });
    }
  }

  @ApiOperation({ summary: '删除菜单' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnMenuDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<returnModule<MenuDto>> {
    try {
      const data = await this.menuService.remove(id);
      return filterReturnData({
        message: '删除成功',
        data,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '菜单不存在',
      });
    }
  }

  @ApiOperation({ summary: '修改菜单' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnMenuDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() menuDto: createMenuDto,
  ): Promise<returnModule<MenuDto>> {
    try {
      const data = await this.menuService.update(id, menuDto);
      return filterReturnData({
        message: '修改成功',
        data,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '菜单不存在',
      });
    }
  }
}
