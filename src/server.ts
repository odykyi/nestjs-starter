import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, instance);
app.then((instance) => instance.listen(6000, () => console.log('Application is listening on port 6000')));
