import { Controller, Get, Post, Request, Response, Param, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    public async getAllUsers(@Response() res) {
        const users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getUser(@Response() res, @Param('id') id) {
        const user = await this.usersService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async addUser(@Response() res, @Body('user') user) {
        const msg = await this.usersService.addUser(user);
        res.status(HttpStatus.CREATED).json(msg);
    }
}
