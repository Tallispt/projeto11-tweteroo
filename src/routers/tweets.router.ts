import { Router } from "express";
import { createTweetController } from "../useCase/Tweets/createTweet";
import { getAllTweetsController } from "../useCase/Tweets/getAllTweets";
import { getTweetByUserController } from "../useCase/Tweets/getTweetByUser";

const tweetRouter = Router();

tweetRouter.post("/tweets", (req, res) =>
  createTweetController.handle(req, res)
);
tweetRouter.get("/tweets", (req, res) =>
  getAllTweetsController.handle(req, res)
);
tweetRouter.get("/tweets/:username", (req, res) =>
  getTweetByUserController.handle(req, res)
);

export default tweetRouter;