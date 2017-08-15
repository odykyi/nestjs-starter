import { Controller, Get, Post, Request as Req, Response as Res, Param, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    public async getAllUsers(@Res() res) {
        const users = await this.usersService.getAllUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getUser(@Res() res, @Param('id') id) {
        const user = await this.usersService.getUser(id);
        return res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async addUser(@Res() res, @Body('user') user) {
        const msg = await this.usersService.addUser(user);
        return res.status(HttpStatus.CREATED).json(msg);
    }
}