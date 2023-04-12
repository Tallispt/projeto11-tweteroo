import { Tweet } from "../../../models/Tweet.js";
import { TweetRepository } from "../../../repositories/tweetRepository.js";

export class GetTweetByUserService {
  constructor(private tweetRepository: TweetRepository) {}

  execute(username: string): Tweet[] {
    return this.tweetRepository.getByUser(username);
  }
}