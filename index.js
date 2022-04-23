import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());

const user = [];
const tweet = [];

server.post("/sign-up", (req,res) => {
  res.send("post");
})

server.post("/tweets", (req,res) => {
  res.send("post");
});

server.get("/tweets", (req,res) => {
  res.send("get");
});







server.listen(5000, () => {
  console.log(chalk.bold.green('Running on http://localhost:5000'));
})
