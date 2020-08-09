import { paginationDto } from '../dto/common.dto';

export interface returnModule<T> {
  statusCode?: string;
  message?: string;
  data?: T;
  pagination?: paginationDto;
}

export function filterReturnData<T>({
  statusCode = '0',
  message = '成功',
  data,
  pagination,
}: returnModule<T>): returnModule<T> {
  return { statusCode, message, data, pagination };
}
