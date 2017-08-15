import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
    modules: [ UsersModule ]
})
export class ApplicationModule {}