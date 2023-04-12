import { TweetRepository } from "../../../repositories/tweetRepository.js";
import { GetTweetByUserController } from "./getTweetByUserController.js";
import { GetTweetByUserService } from "./getTweetByUserService.js";

const tweetRepository = TweetRepository.getInstance();
const getTweetByUserService = new GetTweetByUserService(tweetRepository);
export const getTweetByUserController = new GetTweetByUserController(
  getTweetByUserService
);