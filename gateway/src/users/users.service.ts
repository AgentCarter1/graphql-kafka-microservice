import { Injectable } from '@nestjs/common';
import { ClientTCP } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateUserInput } from './model/user.model';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientTCP) {}

  async onModuleInit() {
    await this.client.connect();
  }

  async getUser(id: string) {
    return this.client.send('get-user', id);
  }

  async createUser(createUserInput: CreateUserInput) {
    return this.client.send('create-user', createUserInput.name);
  }

  async getAllUser() {
    return this.client.send('get-all-user', {});
  }
}
