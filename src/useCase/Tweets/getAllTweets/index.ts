import { TweetRepository } from "../../../repositories/tweetRepository.js";
import { GetAllTweetsController } from "./getAllTweetsController.js";
import { GetAllTweetsService } from "./getAllTweetsService.js";

const tweetRepository = TweetRepository.getInstance();
const getAllTweetsService = new GetAllTweetsService(tweetRepository);
export const getAllTweetsController = new GetAllTweetsController(
  getAllTweetsService
);