import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import { ApplicationModule } from './modules/app.module';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

const nest = NestFactory.create(ApplicationModule, app);
nest.then((a) => a.listen(6000, () => console.log('Application is listening on port 6000')));
