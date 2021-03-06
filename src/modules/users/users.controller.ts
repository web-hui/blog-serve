import {
  Controller,
  Get,
  UseGuards,
  Body,
  Delete,
  Post,
  Query,
  Param,
  Put,
  Request,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { paginationDto } from '../../common/dto/common.dto';
import {
  ApiHeader,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { returnModule, filterReturnData } from '../../common/utils';
import {
  UserDto,
  returnDataDto,
  returnDataNoPageDto,
  CreateUserDto,
  queryUserDto,
} from './user.dto';

@ApiBearerAuth()
@ApiTags('用户接口')
@Controller('user')
export class userController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: '获取所有用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnDataDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Get()
  async findAll(
    @Query() query: queryUserDto,
  ): Promise<returnModule<returnDataDto>> {
    if (query?.username?.trim() === '') {
      delete query.username;
    }
    query = { currentPage: 1, pageSize: 20, ...query };
    const [user, count] = await this.usersService.findAll(query);
    const pagination: paginationDto = {
      currentPage: Number(query.currentPage),
      pageSize: Number(query.pageSize),
      total: count,
    };
    console.log(query, count, user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { password, ...data } = user;
    return filterReturnData({ data: user, pagination });
  }

  @ApiOperation({ summary: '根据token获取用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功.',
    type: returnDataNoPageDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Get('getUserInfo')
  async getProfile(
    @Request() req: { user?: any },
  ): Promise<returnModule<UserDto>> {
    const { username } = req.user;
    console.log(req.user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = await this.usersService.byUserName(
      username,
    );
    return filterReturnData({
      data: result,
    });
  }

  @ApiOperation({ summary: '添加用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnDataNoPageDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Post()
  @HttpCode(200)
  async createUser(
    @Body() userDto: CreateUserDto,
  ): Promise<returnModule<UserDto>> {
    try {
      console.log(userDto);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = await this.usersService.createUser(
        userDto,
      );
      return filterReturnData({
        message: '创建成功',
        data: result,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '用户已存在',
      });
    }
  }

  @ApiOperation({ summary: '删除用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnDataNoPageDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<returnModule<UserDto>> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = await this.usersService.remove(id);
      return filterReturnData({
        message: '删除成功',
        data: result,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '用户不存在',
      });
    }
  }

  @ApiOperation({ summary: '修改用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功',
    type: returnDataNoPageDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({ name: 'token', description: 'token' })
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: CreateUserDto,
  ): Promise<returnModule<UserDto>> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = await this.usersService.update(
        id,
        userDto,
      );
      return filterReturnData({
        message: '修改成功',
        data: result,
      });
    } catch (error) {
      return filterReturnData({
        statusCode: '-1',
        message: '用户不存在',
      });
    }
  }
}
