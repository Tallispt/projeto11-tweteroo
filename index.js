import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const server = express();

server.use(cors())
    .use(json())

const users = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
];
const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
];

server.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
      res.status(400).send('Todos os campos são obrigatórios!');
      return;
    }

    usuarios.push({ username, avatar });

    res.status(201).send({ message: 'OK' })
})

server.post('/tweets', (req, res) => {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = usuarios.find(user => user.username === username);

  tweets.push({ username, tweet, avatar });
  
    res.status(201).send({ message: 'OK' })
})

server.get('/tweets/:username', (req, res) => {
    const { username } = req.params;
  
    const tweetsDoUsuario = tweets.filter(t => t.username === username);
  
    res.status(200).send(tweetsDoUsuario);
  });

server.get('/tweets', (req, res) => {
    const { page } = req.query;

    const newTweets = [];
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (page && page < 1) {
        res.status(400).send('Informe uma página válida!');
        return;
    }
  
    for (let i = 0; i < tweets.length; i++) {
        let filteredAvatar = users.filter(user => user.username === tweets[i].username)[0].avatar;
        newTweets.push({ ...tweets[i], avatar: filteredAvatar })
    }
    
    if (tweets.length <= 10) {
      return res.send([...newTweets].reverse());
    }

    res.status(200).send([...newTweets].reverse().slice(start, end));
})

server.listen(port, () => console.log("Listening to port " + port))