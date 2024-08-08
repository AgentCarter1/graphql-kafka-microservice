import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUser() {
    return this.userRepository.find({});
  }

  async findOne(userId: string) {
    return this.userRepository.findOne({ _id: userId });
  }

  async createUser(name: string) {
    return this.userRepository.create(name);
  }
}
