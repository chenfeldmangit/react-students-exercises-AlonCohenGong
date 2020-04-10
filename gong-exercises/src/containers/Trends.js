import React, { Component } from 'react';
import '../css/trends.css';

class Trends extends Component {
    render () {
        return (
            <div className="trends-wrapper">
                <div className="search-box">
                    <input className="search-box-input" type="input" placeholder="Follow ..."/>
                    <button className="search-box-button"><img src="../assets/search.svg" alt="Search"/></button>

                </div>
                <div className="trends">
                    <div className="trend-item trends-header">Trends for you</div>
                    <div className="trend-item">
                        <div className="top">
                            <div className="left item">Politics · Trending</div>
                            <div className="arrow item"><img src="../assets/arrow_down.svg"/></div>
                        </div>
                        <div className="mid">Netanyahu</div>
                        <div className="bottom">16.4K Tweets</div>
                    </div>

                    <div className="trend-item">
                        <div className="top">
                            <div className="left item">Politics · Trending</div>
                            <div className="arrow item"><img src="../assets/arrow_down.svg"/></div>
                        </div>
                        <div className="mid">Netanyahu</div>
                        <div className="bottom">16.4K Tweets</div>
                    </div>

                    <div className="trend-item">
                        <div className="top">
                            <div className="left item">Politics · Trending</div>
                            <div className="arrow item"><img src="../assets/arrow_down.svg"/></div>
                        </div>
                        <div className="mid">Netanyahu</div>
                        <div className="bottom">16.4K Tweets</div>
                    </div>

                    <div className="trend-item">
                        <div className="top">
                            <div className="left item">Politics · Trending</div>
                            <div className="arrow item"><img src="../assets/arrow_down.svg"/></div>
                        </div>
                        <div className="mid">Netanyahu</div>
                        <div className="bottom">16.4K Tweets</div>
                    </div>

                    <div className="trend-item">
                        <div className="top">
                            <div className="left item">Politics · Trending</div>
                            <div className="arrow item"><img src="../assets/arrow_down.svg"/></div>
                        </div>
                        <div className="mid">Netanyahu</div>
                        <div className="bottom">16.4K Tweets</div>
                    </div>

                    <div className="trend-item  trends-footer">Show More</div>

                </div>
            </div>

    );
    }
};

export default Trends;