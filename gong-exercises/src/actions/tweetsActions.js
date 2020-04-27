export const LOAD_TWEETS = 'LOAD_TWEETS';
export const LOAD_TWEETS_START = 'LOAD_TWEETS_START';
export const LOAD_TWEETS_SUCESS = 'LOAD_TWEETS_SUCESS';
export const LOAD_TWEETS_ERROR = 'LOAD_TWEETS_ERROR';

export const TWEET_LIKE = 'TWEET_LIKE';
export const TWEET_LIKE_START = 'TWEET_LIKE_START';
export const TWEET_LIKE_SUCESS = 'TWEET_LIKE_SUCESS';
export const TWEET_LIKE_FAIL = 'TWEET_LIKE_FAIL';

export const TWEET_DELETE_CLICKED = 'TWEET_DELETE_CLICKED';
export const NEW_TWEET_CLICKED = 'NEW_TWEET_CLICKED';

export const setTweets = (dataKey) => ({
    type: LOAD_TWEETS,
    payload: {dataKey},
});
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
    type: TWEET_LIKE,
    payload: {key},
});

export const tweetLikeStart = () => ({
    type: TWEET_LIKE_START,
});
export const tweetLikeSuccess = (key) => ({
    type: TWEET_LIKE_SUCESS,
    payload: {key},
});
export const tweetLikeFail = () => ({
    type: TWEET_LIKE_FAIL,
});


export const tweetDeleteClicked = (key) => ({
    type: TWEET_DELETE_CLICKED,
    payload: {key},
});
export const newTweetClicked = (newTweet) => ({
    type: NEW_TWEET_CLICKED,
    payload: {newTweet},
});




