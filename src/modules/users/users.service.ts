import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto, queryUserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(query: User): Promise<User> {
    return this.userRepository.findOne(query);
  }

  async findAll(query: queryUserDto): Promise<any[]> {
    const start =
      Number(query.currentPage) === 1
        ? 0
        : (Number(query.currentPage) - 1) * Number(query.pageSize);
    const end = Number(query.pageSize);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentPage, pageSize, ...data } = query;
    const [user, count] = await this.userRepository.findAndCount({
      where: data,
      skip: start,
      take: end,
    });
    return [user, count];
  }

  async byUserName(username: string): Promise<User> {
    return this.userRepository.findOne({ username });
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = userDto.username;
    user.password = userDto.password;
    user.role = userDto.role;
    console.log(user);
    return await this.userRepository.save(user);
  }

  async remove(id: string): Promise<User> {
    const userRemove = await this.userRepository.findOne(id);
    return await this.userRepository.remove(userRemove);
  }

  async update(id: string, userDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);
    user.username = userDto.username;
    user.role = userDto.role;
    return await this.userRepository.save(user);
  }
}
