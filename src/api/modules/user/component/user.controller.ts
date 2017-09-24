import {UserService} from './user.service';
import {Controller, Dependencies, Get, HttpStatus, Response} from '@nestjs/common';

@Controller('users')
@Dependencies(UserService)
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get()
  getAllUsers(@Response() res) {
    this.usersService.getAllUsers()
      .then(users => res.status(HttpStatus.OK).json(users));
  }

  // @Get('/:id')
  // getUser(@Response() res, @Param('id') id) {
  //   this.usersService.getUser(+id)
  //     .then(user => res.status(HttpStatus.OK).json(user));
  // }
  //
  // @Post()
  // addUser(@Response() res, @Body('user') user) {
  //   this.usersService.addUser(user)
  //     .then(msg => res.status(HttpStatus.CREATED).json(msg));
  // }
}
