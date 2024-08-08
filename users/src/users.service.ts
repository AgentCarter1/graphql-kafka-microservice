import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Gul Aydin' },
  ];

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
