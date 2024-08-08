import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [{ id: '1', name: 'John Doe' }];

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'User Not Found';
    return user;
  }

  createUser(name: string) {
    const newUser = { id: (this.users.length + 1).toString(), name };
    this.users.push(newUser);
    return newUser;
  }
}
