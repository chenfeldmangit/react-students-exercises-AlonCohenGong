import React, { useState, useEffect } from 'react';
import Throbber from '../UI/Throbber';
import Modal from '../UI/Modal';
import {tweete} from '../JSON/tweets';
import Tweet from '../components/news/Tweet';

import '../css/news.css';

function News (props) {
    const [throbber, setThrobber] = useState(false);
    const [tweetText, setTweetText] = useState('');
    const [newsItems, setNewsItems] = useState([]);

    useEffect(()=>{
        console.log('useEffect tweetItems on..');
        setNewsItems([...tweete]);
    }, []);

    const onLikeClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = newsItems.map((item)=> (item.id==key ? {...item, 'liked': !item.liked} : item ));
        console.log('like', tmpNewsItems);
        setNewsItems([...tmpNewsItems]);
    };
    const onDeleteClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = newsItems.filter((item)=> item.id != key);
        console.log('onLikeClickHandler' , tmpNewsItems);
        setNewsItems([...tmpNewsItems]);
    };
    const onTweetClickHandler = (key) => {
        setThrobber(true);
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
            setThrobber(false);
            setTweetText('');
            setNewsItems([newTweet, ...newsItems]);
        }, 2000);
    };
 /*   const onTweetTextChangeHandler = (e) => {
        setTweetText(e.target.value);
    };*/

    const {tweetsSearchTerm} = props;
    const tweetItemsFiltered = tweetsSearchTerm.length ? newsItems.filter(item => item.text.indexOf(tweetsSearchTerm) >= 0) : newsItems;
    const tweetItems = tweetItemsFiltered.map((item)=>{
        return (
                <Tweet profileImgSrc={item.img} 
                       likeHandler={onLikeClickHandler}
                       onDeleteClickHandler={onDeleteClickHandler}
                       name={item.name} 
                       more={item.from} 
                       when={item.when} 
                       key={item.id} 
                       id={item.id}
                       text={item.text} 
                       liked={item.liked}/>
        )});
        return (
            <>
                {throbber && <Modal><Throbber/></Modal>}
                <div className="news-feed-wrapper">
                    <div className="header">
                        <div className="header-text">Home</div>
                        <div className="header-icon"><img src={`${process.env.PUBLIC_URL}/assets/post.svg`} alt="post ..."/></div>
                    </div>
                    <div className="feed-item profile">
                        <div className="img-col">
                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/me.jpg`} alt="profile image"/></a>
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
                                        <div className="icon-e"><a href="#"><img src="../assets/img.svg" alt="img ..."/></a></div>
                                        <div className="icon-e"><a href="#"><img src="../assets/gif.svg" alt="gif ..."/></a></div>
                                        <div className="icon-e"><a href="#"><img src="../assets/doc.svg" alt="doc ..."/></a></div>
                                        <div className="icon-e"><a href="#"><img src="../assets/smily.svg" alt="smily ..."/></a></div>
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

export default News;