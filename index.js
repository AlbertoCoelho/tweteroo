import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';

const server = express();
server.use(json());
server.use(cors());

const users = [];
const tweet = [];

server.post("/sign-up", (req,res) => {
  const body = req.body;
  users.push(body);
  res.send("OK");
})

server.post("/tweets", (req,res) => {
  const body = req.body;
  console.log(users);
  const user = users.find(user => user.username === body.username);
  tweet.push({ ...body, avatar: user.avatar });
  res.send("OK");
});

server.get("/tweets", (req,res) => {
  res.send(tweet);
});







server.listen(5000, () => {
  console.log(chalk.bold.green('Running on http://localhost:5000'));
})
