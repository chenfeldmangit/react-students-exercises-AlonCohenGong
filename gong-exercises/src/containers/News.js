import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import useFetchFromLocalStore from '../data/useFetchFromLocalStore';
import Throbber from '../UI/Throbber';
import Modal from '../UI/Modal';
import * as tweetsActions from '../actions/tweetsActions';
import DbApi from "../data/DbApi";
//import {tweete} from '../JSON/tweets';
import Tweet from '../components/news/Tweet';
import '../css/news.css';


function News (props) {
    const dataKey = 'NEWS-TWEETS';
    const [tweetText, setTweetText] = useState('');
    /*
    const [data, setData, throbber] = useFetchFromLocalStore(dataKey, [], false);
    let newsItems = [...data]; //useFetchFromLocalStore(dataKey, []);
*/
    useEffect( ()=>{
        const getAllTweetsFromDb = async ()=>{
            const dataFromDb = await DbApi.getDataByKey(dataKey);
            //props.dispatch(tweetsActions.setTweetsSucess(dataFromDb));
            props.onTweetsInit(dataFromDb);
        };
        props.onTweetsInitStart();
        getAllTweetsFromDb();
    },[]);

/*
    const onLikeClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = newsItems.map((item)=> (item.id==key ? {...item, 'liked': !item.liked} : item ));
        //setNewsItems(DbApi.updateNewsTweets([...tmpNewsItems]));
        setData([...tmpNewsItems]);


    };
    const onDeleteClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = newsItems.filter((item)=> item.id != key);
        console.log('onLikeClickHandler' , tmpNewsItems);
        //setNewsItems(DbApi.updateNewsTweets([...tmpNewsItems]));
        setData([...tmpNewsItems]);
    };
*/
    const onTweetClickHandler = (key) => {
        //setThrobber(true);
        const newTweet =  {
            user: 'IvankaTrump',
            name: 'Ivanka Trump',
            from: '@FLOTUS',
            time: '1sec',
            id: 'Ivanka'+Math.random().toString().slice(2,6),
            img: 'https://pbs.twimg.com/profile_images/1054179226100908032/i5ZXfFdE_400x400.jpg',
            liked: false,
            text: tweetText,
        };
        setTimeout(()=>{
            setTweetText('');
            //setNewsItems(DbApi.updateNewsTweets([newTweet, ...newsItems]));
            //setData([newTweet, ...newsItems]);
            props.onNewTweetClick(newTweet);
            DbApi.addNewTweetToDB(newTweet);
        }, 2000);
    };

    const {loading, tweetsList} = props.tweets;
    const {tweetsSearchTerm} = props;
    const tweetItemsFiltered = tweetsSearchTerm.length ? tweetsList.filter(item => item.text.indexOf(tweetsSearchTerm) >= 0) : tweetsList;
    //console.log('news', tweetItemsFiltered);
    const tweetItems = tweetItemsFiltered?.map((item)=>{
        return (
                <Tweet key={item.id}
                       profileImgSrc={item.img}
                       likeHandler={props.onLikeClick}
                       onDeleteClickHandler={props.onDeleteClick}
                       name={item.name} 
                       more={item.from} 
                       when={item.when}
                       id={item.id}
                       text={item.text} 
                       liked={item.liked}/>
        )});
        return (
            <>
                {props.tweets.loading && <Modal><Throbber/></Modal>}
                <div className="news-feed-wrapper">
                    <div className="header">
                        <div className="header-text">Home</div>
                        <div className="header-icon"><img src={`${process.env.PUBLIC_URL}/assets/post.svg`} alt="post ..."/></div>
                    </div>
                    <div className="feed-item profile">
                        <div className="img-col">
                           <img src={`${process.env.PUBLIC_URL}/assets/me.jpg`} alt="profile image"/>
                        </div>
                        <div className="story-col">
                            <div className="text-area">
                                <textarea
                                    id="news-textarea"
                                    rows="1"
                                    cols="200"
                                    placeholder="What's going on today ..."
                                    value={tweetText}
                                    onChange={e => setTweetText(e.target.value)}
                                />
                            </div>
                            <div className="feed-item-profile">
                                <div>
                                    <div className="icone-list">
                                        <div className="icon-e"><img src="../assets/img.svg" alt="img ..."/></div>
                                        <div className="icon-e"><img src="../assets/gif.svg" alt="gif ..."/></div>
                                        <div className="icon-e"><img src="../assets/doc.svg" alt="doc ..."/></div>
                                        <div className="icon-e"><img src="../assets/smily.svg" alt="smily ..."/></div>
                                    </div>
                                </div>
                                <div>
                                    <button className="button"
                                            id="tweet-button"
                                            disabled={tweetText.length < 3}
                                            onClick={onTweetClickHandler}>Tweeet</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="news-feed-item">
                        {tweetItems}
                    </div>
                </div>
            </>

        );
};


const mapStateToProps = (state)=>{
    console.log('mapStateToProps sssssssssssss', state);
    return {
        tweets: state.tweets,
    };
};

const mapDispatchToProps = (dispatch) => ({
   onTweetsInitStart: () => dispatch(tweetsActions.setTweetsStart()),
   onTweetsInit: tweetsList => {
       dispatch(tweetsActions.setTweetsStart());
       dispatch(tweetsActions.setTweetsSucess(tweetsList));
   },
   onLikeClick: key => {
       dispatch(tweetsActions.tweetLikeClicked(key));
       DbApi.addTweetLikeToDB(key);

   },
   onDeleteClick: key => {
       dispatch(tweetsActions.tweetDeleteClicked(key));
       DbApi.deleteTweetFromDB(key);

   },
    onNewTweetClick: key => {
       dispatch(tweetsActions.newTweetClicked(key));

   },

});

export default connect(mapStateToProps, mapDispatchToProps)(News);