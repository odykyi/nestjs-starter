import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { ApplicationModule } from './api/modules/app.module';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

NestFactory.create(ApplicationModule, app)
  .then(a => a.listen(8000, () => console.log('Application is listening on port 8000')));
