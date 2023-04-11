import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routers/auth.router.js';
import tweetRouter from './routers/tweets.router.js';

dotenv.config();

const port = process.env.PORT;
const server = express();

server.use(cors())
    .use(json())
    .use(authRouter)
    .use(tweetRouter)

server.listen(port, () => console.log("Listening to port " + port))