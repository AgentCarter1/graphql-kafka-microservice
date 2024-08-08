import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('get-user')
  getUser(@Payload() id: string) {
    return this.usersService.findOne(id);
  }
  @MessagePattern('create-user')
  createUser(@Payload() name: string) {
    return this.usersService.createUser(name);
  }
}
