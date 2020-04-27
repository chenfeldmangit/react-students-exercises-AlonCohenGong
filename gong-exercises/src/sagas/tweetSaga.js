import {fork, take, takeEvery, call, put, all, select} from 'redux-saga/effects';
import * as actions from '../actions/tweetsActions';
import DbApi from "../data/DbApi";

const getAllTweetsFromDb = async (dataKey)=>{
    const dataFromDb = await DbApi.getDataByKey(dataKey);
    return dataFromDb;
};

function* addTweets(action){
    const dataKey = action.payload.dataKey;
    console.log('SAGA add Tweet', dataKey);
    yield put(actions.setTweetsStart());
    try{
    const data = yield call(getAllTweetsFromDb, dataKey);
    if(data){
        yield put(actions.setTweetsSucess(data));
    }else {
        yield put(actions.setTweetsFail());
    }
    }catch(err){
        yield put(actions.setTweetsFail());
    }

}

function* waitForTweetAdd() {
    console.log('SAGA waitForTweetAdd');
    yield takeEvery(actions.LOAD_TWEETS, addTweets);

    /*while(true) {
        const action = yield take(actions.LOAD_TWEETS);
    try{
        yield call(addTweets, action.payload.dataKey);

    }catch(err){
        console.log('SAGA ERROR');
    }
    }*/
}
function* waitForLikeAdd() {
    console.log('SAGA waitForLikeAdd');
    while(true) {
        const action = yield take(actions.TWEET_LIKE);
        try{
            yield put(actions.tweetLikeStart());
            console.log('SAGA like addToDB');
            //callDB
            DbApi.addTweetLikeToDB(action.payload.key);
            yield put(actions.tweetLikeSuccess(action.payload.key));
        }catch(err){
            console.log('SAGA ERROR');
            yield put(actions.tweetLikeFail());
        }
    }
}


export default function* rootSaga() {
    console.log('SAGA ROOT');
    yield all([
        yield fork(waitForTweetAdd),
        yield fork(waitForLikeAdd)
    ]);
}