import { Controller, Post, UseGuards, Body, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { loginDto, returnToken } from './app.dto';

@ApiBearerAuth()
@ApiTags('公共接口')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '用户登陆' })
  @ApiResponse({
    status: 200,
    description: '用户登陆成功',
    type: returnToken,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Body() userDto: loginDto): Promise<returnToken> {
    return this.authService.login(userDto);
  }
}
