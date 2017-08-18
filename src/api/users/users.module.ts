import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController],
  // components: [ { provide: UsersService } ],
  components: [UsersService],
})
export class UsersModule {}
