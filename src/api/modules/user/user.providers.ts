import {Connection} from 'typeorm';
import {User} from './component/user.entity';

export const userProviders = [
  {
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken'],
  },
];