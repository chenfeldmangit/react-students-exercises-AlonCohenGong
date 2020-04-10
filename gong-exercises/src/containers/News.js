import React, { Component } from 'react';
import Throbber from '../UI/Throbber';
import Modal from '../UI/Modal';
import {tweete} from '../JSON/tweets';
import Tweet from '../components/news/Tweet';

import '../css/news.css';

class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            throbber: false,
            tweetText: '',
            newsItems : [],
        }
    }

    componentDidMount() {
        this.setState(({
            newsItems: [...tweete],
        }));
    }

    onLikeClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = this.state.newsItems.map((item)=> (item.id==key ? {...item, 'liked': !item.liked} : item ));
        console.log('like', tmpNewsItems);
        this.setState(({
            newsItems: [...tmpNewsItems],
        }));
    };
    onDeleteClickHandler = (key) => {
        console.log('onLikeClickHandler' , key);
        const tmpNewsItems = this.state.newsItems.filter((item)=> item.id != key);
        console.log('onLikeClickHandler' , tmpNewsItems);
        this.setState(({
            newsItems: [...tmpNewsItems],
        }));
    };
    onTweetClickHandler = (key) => {
        this.setState((state)=>({
            throbber: true,
        }));
        console.log('TweetHandler' , key);
        const newTweet =  {
            user: 'IvankaTrump',
            name: 'Ivanka Trump',
            from: '@FLOTUS',
            time: '1sec',
            id: 'Ivanka'+Math.random().toString().slice(2,6),
            img: 'https://pbs.twimg.com/profile_images/1054179226100908032/i5ZXfFdE_400x400.jpg',
            liked: false,
            text: this.state.tweetText,
        };
        setTimeout(()=>{
            this.setState((state)=>({
                throbber: false,
                tweetText: '',
                newsItems: [newTweet, ...state.newsItems],
            }));
        }, 2000);
    };
    onTweetTextChangeHandler = (e) => {
        console.log('onTweetTextChangeHandler' , e.target.value);
        this.setState(({
            tweetText: e.target.value,
        }));
    };

    render () {
        console.log('tweete : ' , tweete);
        const tweetItems = this.state.newsItems.map((item)=>{

            return (
                <Tweet profileImgSrc={item.img} 
                       likeHandler={this.onLikeClickHandler}
                       onDeleteClickHandler={this.onDeleteClickHandler}
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
                {this.state.throbber && <Modal><Throbber/></Modal>}
                <div className="news-feed-wrapper">
                    <div className="header">
                        <div className="header-text">Home</div>
                        <div className="header-icon"><a href="#"><img src="../assets/post.svg" alt="post ..."/></a></div>
                    </div>
                    <div className="feed-item profile">
                        <div className="img-col">
                            <a href="#"><img src="../assets/me.jpg" alt="profile image"/></a>
                        </div>
                        <div className="story-col">
                            <div className="text-area">
                                <textarea
                                    id="news-textarea"
                                    rows="1"
                                    cols="200"
                                    placeholder="What's going on today ..."
                                    value={this.state.tweetText}
                                    onChange={this.onTweetTextChangeHandler}
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
                                            disabled={this.state.tweetText.length < 3}
                                            onClick={this.onTweetClickHandler}>Tweeet</button>
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
    }
};

export default News;