import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [ UsersController ],
    // components: [ { provide: UsersService } ],
    components: [ UsersService ],
})
export class UsersModule {}