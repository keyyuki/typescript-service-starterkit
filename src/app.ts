import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import jwtAuth from './middleware/jwt-auth';
import authGuard from './middleware/auth-guard';

const app = express();

app.use(
  cors({
    origin(origin, cb) {
      const whitelist = process.env.CORS_ORIGIN
        ? process.env.CORS_ORIGIN.split(',')
        : [];
      cb(null, whitelist.includes(origin || ''));
    },
    credentials: true,
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(jwtAuth);
app.use(authGuard);

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
