import { Router } from 'express';
import tweetsController from '../constollers/tweets.controller.js';

const tweetRouter = Router();


tweetRouter.post('/tweets', tweetsController.create);
tweetRouter.get('/tweets', tweetsController.getAll);
tweetRouter.get('/tweets/:username', tweetsController.getByUser);

export default tweetRouter;