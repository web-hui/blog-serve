import { ApiProperty } from '@nestjs/swagger';

export class paginationDto {
  @ApiProperty({
    description: '每页显示条目个数',
  })
  pageSize: number;

  @ApiProperty({
    description: '总条目数',
  })
  total: number;

  @ApiProperty({
    description: '当前页数',
  })
  currentPage: number;
}

export class queryPaginationDto {
  @ApiProperty({
    example: '10',
    description: '每页显示条目个数',
  })
  pageSize: number;

  @ApiProperty({
    example: '1',
    description: '当前页数',
  })
  currentPage: number;
}
