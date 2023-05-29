import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UserEntity } from '../interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHash = await hash(createUserDto.password, saltOrRounds);

    const user: UserEntity = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHash,
    };

    this.users.push(user);

    return user;
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.users;
  }
}
