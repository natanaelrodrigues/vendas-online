import { Post, UsePipes, ValidationPipe, Param, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateAddressDto } from './dto/createAdress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';
import { UserType } from 'src/user/enum/user-type.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { UserId } from 'src/decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId('') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
