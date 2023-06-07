import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { returnUserDto } from './dto/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<returnUserDto[]> {
    return (await this.userService.getAllUser()).map(
      (userEntity) => new returnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<returnUserDto> {
    return new returnUserDto(
      await this.userService.getUserByIdUsingRelations(userId),
    );
  }
}
