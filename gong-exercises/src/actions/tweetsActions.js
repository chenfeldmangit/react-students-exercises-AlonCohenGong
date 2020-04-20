export const LOAD_TWEETS_START = 'LOAD_TWEETS_START';
export const LOAD_TWEETS_SUCESS = 'LOAD_TWEETS_SUCESS';
export const LOAD_TWEETS_ERROR = 'LOAD_TWEETS_ERROR';

export const TWEET_LIKE_CLICKED = 'TWEET_LIKE_CLICKED';
export const TWEET_DELETE_CLICKED = 'TWEET_DELETE_CLICKED';
export const NEW_TWEET_CLICKED = 'NEW_TWEET_CLICKED';

export const setTweets = (tweets) => {
    console.log('ACTIONS setTweets', tweets);
};
export const setTweetsStart = () => ({
    type: LOAD_TWEETS_START,
});
export const setTweetsFail = () => ({
    type: LOAD_TWEETS_ERROR,
});
export const setTweetsSucess = (tweets) => ({
    type: LOAD_TWEETS_SUCESS,
    payload: {tweets},
});
export const tweetLikeClicked = (key) => ({
    type: TWEET_LIKE_CLICKED,
    payload: {key},
});
export const tweetDeleteClicked = (key) => ({
    type: TWEET_DELETE_CLICKED,
    payload: {key},
});
export const newTweetClicked = (newTweet) => ({
    type: NEW_TWEET_CLICKED,
    payload: {newTweet},
});




