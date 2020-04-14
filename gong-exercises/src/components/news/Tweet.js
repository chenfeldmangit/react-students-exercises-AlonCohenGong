import React from 'react';

function Tweet (props) {
    return (
        <div className="feed-item" key={props.id} id={props.id}>
            <div className="img-col">
                <a href="#"><img id="img-col-img" src={props.profileImgSrc} alt="profile image"/></a>
            </div>
            <div className="story-col">
                <div className="top-title">
                    <span className="name" id="top-title-name">{props.name}</span>
                    <span className="more" id="top-title-more"> {props.more}</span>
                    <span className="more" id="top-title-time">{props.when}</span>
                    <div className="top-title-right" id="feed-item-delete" onClick={()=>props.onDeleteClickHandler(props.id)}>X</div>
                </div>
                
                <div className="description" id="story-col-text">
                    {props.text}
                </div>

                <div className="feed-item-footer">
                    <div className="icone-list">
                        <div className="icon-e"><a href="#"><img src="./assets/comment.svg" alt="comment ..."/></a></div>
                        <div className="icon-e"><a href="#"><img src="./assets/upload.svg" alt="recycel ..."/></a></div>
                        <div className={`icon-e ${props.liked ? ' liked' : ''}`} id="divlikeid" 
                             onClick={()=>props.likeHandler(props.id)}><img src="./assets/love.svg" alt="love ..."/></div>
                        <div className="icon-e"><a href="#"><img src="./assets/upload.svg" alt="upload ..."/></a></div>
                    </div>
                </div>
            </div>
    
         </div>
);  
}

export default Tweet;