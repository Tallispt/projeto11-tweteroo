import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors()).use(express.json())

const users = [
    {
        username: 'tallispt',
        avatar: 'https://super.abril.com.br/wp-content/uploads/2020/05/si_416_consciencia_01.png'
    },
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    }
];
const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    },
    {
        username: "tallispt",
        tweet: "primeiro tweet"
    }
];

server.post('/sign-up', (req, res) => {
    if (!req.body.username || !req.body.avatar) {
        res.status(400).send({ message: "Todos os campos são obrigatórios" });
        return
    }

    users.push(req.body)
    res.status(201).send({ message: 'OK' })
})

server.post('/tweets', (req, res) => {
    if (!req.body.username || !req.body.tweet) {
        res.status(400).send({ message: "Não é possível enviar um tweet vazio, escreva algo" });
        return
    }

    tweets.push(req.body)
    res.status(201).send({ message: 'OK' })
})

server.get('/tweets', (req, res) => {
    let newTweets = [];
    for (let i = 0; i < tweets.length; i++) {
        let filteredAvatar = users.filter(user => user.username === tweets[i].username)[0].avatar;
        newTweets.push({ ...tweets[i], avatar: filteredAvatar })
    }
    res.send(newTweets.slice(- 10).reverse())
})



server.listen(5000)