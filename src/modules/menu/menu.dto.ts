import { ApiProperty } from '@nestjs/swagger';

export class MenuDto2 {
  @ApiProperty({
    example: '00001',
    description: '菜单id',
  })
  id: number;

  @ApiProperty({
    example: '新闻列表',
    description: '菜单名',
  })
  menuName: string;

  @ApiProperty({
    example: 1,
    description: '父级菜单id',
  })
  parentId?: number;

  @ApiProperty({
    example: '1',
    description: '菜单排序',
  })
  sort?: string;

  @ApiProperty({
    example: '2019-10-15',
    description: '创建时间',
  })
  createTime: number;

  @ApiProperty({
    example: '2019-10-16',
    description: '更新时间',
  })
  updateTime: number;
}

export class MenuDto {
  @ApiProperty({
    example: '00001',
    description: '菜单id',
  })
  id: number;

  @ApiProperty({
    example: '新闻列表',
    description: '菜单名',
  })
  menuName: string;

  @ApiProperty({
    example: 1,
    description: '父级菜单id',
  })
  parentId?: number;

  @ApiProperty({
    example: '1',
    description: '菜单排序',
  })
  sort?: string;

  @ApiProperty({
    example: '2019-10-15',
    description: '创建时间',
  })
  createTime: number;

  @ApiProperty({
    example: '2019-10-16',
    description: '更新时间',
  })
  updateTime: number;

  @ApiProperty({
    description: '子菜单列表',
    isArray: true,
    type: MenuDto2,
  })
  children?: MenuDto[];
}

export class returnMenuDto {
  @ApiProperty({
    description: '状态码',
  })
  statusCode: string;

  @ApiProperty({
    description: '描述信息',
  })
  message: string;

  @ApiProperty({
    description: '菜单列表',
    isArray: true,
    type: MenuDto,
  })
  data: MenuDto[];
}

export class createMenuDto {
  @ApiProperty({
    example: '新闻列表',
    description: '菜单名',
  })
  menuName: string;

  @ApiProperty({
    example: 1,
    description: '父级菜单id',
  })
  parentId?: number;

  @ApiProperty({
    example: '1',
    description: '菜单排序',
  })
  sort?: string;
}
