import * as actions from '../actions/tweetsActions';

const initialState = {
    tweetsList: [],
    error: null,
    loading: false,
};

let tweetsReducer = function(state = initialState, action) {
    switch(action.type) {
       /* case (actions.LOAD_TWEETS):
            return state;*/
        case (actions.LOAD_TWEETS_START):
            return {
                ...state,
                loading: true,
            }
        case (actions.LOAD_TWEETS_SUCESS):
            return {
                ...state,
                tweetsList: action.payload.tweets,
                loading: false,
            }

        case (actions.LOAD_TWEETS_ERROR):
            return {
                ...state,
                error: 'fail To Load Tweets',
                loading: false,
            }
        case (actions.TWEET_LIKE):
            return {...state};
        case (actions.TWEET_LIKE_START):
            return {
                ...state,
                loading: true,
            };
        case (actions.TWEET_LIKE_SUCESS):
            const {key} = action.payload;
            const tmpNewsItems = state.tweetsList.map((item)=> (item.id==key ? {...item, 'liked': !item.liked} : item ));
            return {
                ...state,
                tweetsList: [...tmpNewsItems],
                loading: false,
            };
        case (actions.TWEET_LIKE_FAIL):
            return {
                ...state,
                loading: false,
            };

        case (actions.TWEET_DELETE_CLICKED):
            let tmpNewsItems2 = state.tweetsList.filter((item)=> item.id != action.payload.key);

            return {
                ...state,
                tweetsList: [...tmpNewsItems2],
                loading: false,
            };
            case (actions.NEW_TWEET_CLICKED):
            return {
                ...state,
                tweetsList: [action.payload.newTweet, ...state.tweetsList],
                loading: false,
            };
        default:
            return state;
    }
};

export default tweetsReducer;

