import React, { useState } from 'react';
import '../../css/news.css';
import '../../css/notifications.css';

function Notifications (props) {
    //const [fSearch , setfSearch]=useState ("");

    const notificationsListItems = props.notificationsList.map((item)=> {
       const imgSrc = `${process.env.PUBLIC_URL}/assets/${item.notification}.svg`;
       return (
           <div className="feed-item profile">
            <div className="img-icon"><img src={imgSrc} alt="follow"/></div>

            <div className="img-col">
                <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/me.jpg`} alt="profile image"/></a>
            </div>
            <div className="story-col">
                <div className="text-area">
                    {item.text}
                </div>
            </div>
        </div>
       );
    })
    return (
        <div className="notifications-wrapper">
                <div className="header">
                    <div className="header-text">Notifications</div>
                    <div className="header-between"></div>
                    <div className="header-icon"><img src={`${process.env.PUBLIC_URL}/assets/post.svg`} alt="Notifications ..."/></div>
                </div>
                <div className="top-nav">
                    <div className="header-all selected">All</div>
                    <div className="header-mentions">Mentions</div>
                </div>

               {notificationsListItems}

        </div>);
}

export default Notifications;