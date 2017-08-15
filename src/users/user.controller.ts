import { Controller, Get, Post, HttpStatus } from '@nestjs/common';

@Controller()
export class UsersController {
    @Get('users')
    getAllUsers() {}

    @Get('users/:id')
    getUser() {}

    @Post('users')
    addUser() {}
}
