import { UsersService } from '../services/users.service';
import {
  Dependencies, Controller, Get, Post, Response, Param, Body, HttpStatus,
} from '@nestjs/common';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(@Response() res) {
    this.usersService.getAllUsers()
      .then(users => res.status(HttpStatus.OK).json(users));
  }

  @Get('/:id')
  getUser(@Response() res, @Param('id') id) {
    this.usersService.getUser(+id)
      .then(user => res.status(HttpStatus.OK).json(user));
  }

  @Post()
  addUser(@Response() res, @Body('user') user) {
    this.usersService.addUser(user)
      .then(msg => res.status(HttpStatus.CREATED).json(msg));
  }
}
