import React, { Component } from 'react';
import Modal from '../UI/Modal';
import ProfileForm from '../components/profile/ProfileForm';
import '../css/profile.css';


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = ({
            editModal: false,
        });
    }

    editProfileHandler = ()=> {
        console.log('editProfileHandler');
        this.setState((state)=>({
            editModal: !state.editModal,
        }));
    };


    render () {
        console.log('[profile.js]', this.state);
        return (
        <>
            {this.state.editModal
            && <Modal>
                <ProfileForm settings={this.props.profile} toggleModal={this.editProfileHandler} onProfileUpdateHanler={this.props.onProfileUpdateHanler}/>
            </Modal>}
            <div className="profile-wrapper">
                <div className="header">
                    <div className="header-text">{this.props.profile.name}</div>
                    <div className="header-subtext">{this.props.profile.tweets} Tweets</div>
                    <div className="header-icon"><img src="./assets/post.svg" alt="post ..."/></div>
                </div>
                <div className="feed-item-top profile-top">
                <div className="img-back">
                    <img src="./assets/acidparty.jpg" alt="profile image"/>
                </div>
                <div className="img-back-bottom-row">
                    <div className="img-col"><img src="./assets/me.jpg" alt="profile image"/></div>
                <div className="img-back-bottom-row-button">
                    <button className="button" onClick={this.editProfileHandler}>Edit Profile</button>
                </div>
                </div>
                    <div style={{textAlign: 'left', color:'#00eeFF'}}>
                        <div>id: {this.props.profile.id}</div>
                        <div>Name: {this.props.profile.name}</div>
                        <div>Bio: {this.props.profile.bio}</div>
                        <div>Location: {this.props.profile.location}</div>
                        <div>Website: {this.props.profile.website}</div>
                    </div>
                <div className="story-col">
                <div className="feed-item-top-profile">
                    <div className="icone-list">
                        <div className="icon-e tweet">Tweets</div>
                    <div className="icon-e">Tweets & replies</div>
                <div className="icon-e">Media</div>
                <div className="icon-e">Likes</div>
                </div>
                </div>
                </div>
                </div>

                <div id="feed-item-template">

                </div>

                <div className="feed-item ">
                    Who to Folllow
                </div>

            </div>
         </>
        );
    }
}

export default Profile;