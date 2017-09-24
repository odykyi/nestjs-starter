import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';

@Module({
  modules: [UsersModule],
})
export class ApplicationModule {}
