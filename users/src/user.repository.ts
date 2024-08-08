import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async find(query: any): Promise<User[]> {
    return this.userModel.find(query).exec();
  }

  async findOne(query: any): Promise<User> {
    return this.userModel.findOne(query).exec();
  }

  async create(name: string): Promise<User> {
    const newUser = new this.userModel({ name });
    return newUser.save();
  }
}
