import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

// TODO include repisotory  nestjs-starter/src/example/repository/example.repository.ts
// and run it

@Component()
export class ExampleService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Alice Caeiro' },
    { id: 3, name: 'Who Knows' },
  ];

  getAllExamples() {
    return Promise.resolve(this.users);
  }

  getExampleById(id) {
    const user = this.users.find(user => user.id === id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return Promise.resolve(user);
  }

  addExample(user) {
    this.users.push(user);
    return Promise.resolve();
  }
}
