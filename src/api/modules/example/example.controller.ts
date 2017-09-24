import { ExampleService } from './example.service';
import {
  Dependencies, Controller, Get, Post,
  Response, Param, Body, HttpStatus,
} from '@nestjs/common';

@Controller('example')
@Dependencies(ExampleService)
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get()
  getAllUsers(@Response() res) {
    this.exampleService.getAllExamples()
      .then(users => res.status(HttpStatus.OK).json(users));
  }

  @Get('/:id')
  getExample(@Response() res, @Param('id') id) {
    this.exampleService.getExampleById(+id)
      .then(user => res.status(HttpStatus.OK).json(user));
  }

  @Post()
  addUser(@Response() res, @Body('user') user) {
    this.exampleService.addExample(user)
      .then(msg => res.status(HttpStatus.OK).json(msg));
  }
}
