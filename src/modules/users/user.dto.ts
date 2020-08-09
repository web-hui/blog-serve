import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { paginationDto } from '../../common/dto/common.dto';

export class UserDto {
  @ApiProperty({
    example: '00001',
    description: '用户id',
  })
  id: number;

  @ApiProperty({
    example: 'root',
    description: '用户名',
  })
  username: string;

  @ApiProperty({
    example: '123456',
    description: '用户密码',
  })
  password?: string;

  @ApiProperty({
    example: 'admin',
    description: '用户角色',
  })
  role: string;

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

export class returnDataDto {
  @ApiProperty({
    description: '状态码',
  })
  statusCode: string;

  @ApiProperty({
    description: '描述信息',
  })
  message: string;

  @ApiProperty({
    description: '用户列表',
    isArray: true,
    type: UserDto,
  })
  data: UserDto[];

  @ApiProperty({
    description: '分页信息',
    type: paginationDto,
  })
  pagination: paginationDto;
}

export class returnDataNoPageDto {
  @ApiProperty({
    description: '状态码',
  })
  statusCode: string;

  @ApiProperty({
    description: '描述信息',
  })
  message: string;

  @ApiProperty({
    description: '用户列表',
    type: UserDto,
  })
  data: UserDto;
}

export class CreateUserDto {
  @ApiProperty({
    description: '用户名',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: '密码',
    required: false,
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: '用户角色',
  })
  @IsString()
  role: string;
}

export class queryUserDto {
  @ApiProperty({
    description: '用户名',
    required: false,
  })
  // @IsString()
  username?: string;

  @ApiProperty({
    description: '用户角色',
    required: false,
  })
  // @IsString()
  role?: string;

  @ApiProperty({
    example: '10',
    description: '每页显示条目个数',
  })
  // @IsInt()
  pageSize: number;

  @ApiProperty({
    example: '1',
    description: '当前页数',
  })
  // @IsInt()
  currentPage: number;
}
