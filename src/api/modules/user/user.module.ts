import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {userProviders} from './user.providers';
import {UserService} from './component/user.service';

@Module({
  modules: [DatabaseModule],
  components: [
    ...userProviders,
    UserService,
  ],
})
export class PhotoModule {}
