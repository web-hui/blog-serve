import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginDto {
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
}

export class returnToken {
  @ApiProperty({
    description: 'token',
    required: false,
  })
  @IsString()
  token: string;
}
