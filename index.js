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
  if(body.username === '' || body.avatar === ''){
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  users.push(body);
  res.sendStatus(201);
})

server.post("/tweets", (req,res) => {
  const body = req.body;
  const user = users.find(user => user.username === body.username);
  if(body.username === '' || body.tweet === ''){
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  tweet.push({ ...body, avatar: user.avatar });
  res.sendStatus(201);
});

server.get("/tweets", (req,res) => {
  const tweetfilter = tweet.slice(-10).reverse();
  res.send(tweetfilter);
});

server.listen(5000, () => {
  console.log(chalk.bold.green('Running on http://localhost:5000'));
})
