import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());








server.listen(5000, () => {
  console.log(chalk.bold.green('Running on http://localhost:5000'));
})
