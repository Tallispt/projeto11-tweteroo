import { TweetRepository } from "../../../repositories/tweetRepository.js";
import { CreateTweetController } from "./createTweetController.js";
import { CreateTweetService } from "./createTweetService.js";

const tweetRepository = TweetRepository.getInstance();
const createTweetService = new CreateTweetService(tweetRepository);
export const createTweetController = new CreateTweetController(
  createTweetService
);