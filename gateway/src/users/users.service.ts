import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { CreateUserInput } from './user.model';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('get-user');
    this.client.subscribeToResponseOf('create-user');
    await this.client.connect();
  }

  async getUser(id: string) {
    return this.client.send('get-user', id).toPromise();
  }

  async createUser(createUserInput: CreateUserInput) {
    return this.client.send('create-user', createUserInput.name).toPromise();
  }
}
