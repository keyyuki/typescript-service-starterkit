// get config env to all project
import * as getenv from 'dotenv';
getenv.config();

import app from './app';

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
