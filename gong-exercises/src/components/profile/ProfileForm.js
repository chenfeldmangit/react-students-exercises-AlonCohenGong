import React, { useState } from 'react';
import '../../css/editProfile.css';

function ProfileForm (props) {
    const [fName, setfName] = useState(props.settings.name);
    const [fBio, setfBio] = useState(props.settings.bio);
    const [fLocation, setfLocation] = useState(props.settings.location);
    const [fWebsite, setfWebsite] = useState(props.settings.website);

    console.log('profileEdit',fName, props.settings);

    const handelSubmit = (e)=>{
        e.preventDefault();

        const profileSettings = {
            name: fName,
            bio: fBio,
            location: fLocation,
            website: fWebsite,
        };
        props.onProfileUpdateHanler(profileSettings);
        props.toggleModal();
        console.log('form submit');
    }
    return (
        <div className="modal profile-wrapper" id="modal">
            <div className="header">
                <div className="closex" onClick={props.toggleModal}>X</div>
                <div className="title">Edit Profile</div>
                <div className="space"></div>
                <div className="save">
                    <button className="button" id="profileSaveButton" onClick={handelSubmit}>Save</button>
                </div>
            </div>

            <div className="feed-item-top profile-top">
                <div className="img-back">
                    <img src="./assets/acidparty.jpg" alt="profile image"/>
                </div>
                <div className="img-back-bottom-row">
                    <div className="img-col"><img src="./assets/me.jpg" alt="profile image"/></div>
                    <div className="space-div"></div>
                </div>
            </div>

            <form className="modal-form" method="post" onSubmit={handelSubmit}>
                <div className="form-element input" key="1">
                    <label htmlFor="fName">Name</label>
                    <input className="box-input" id="fName" type="input" placeholder="" value={fName} onChange={e => setfName(e.target.value)}/>
                </div>
                <div className="form-element input" key="2">
                    <label htmlFor="fBio">Bio</label>
                    <input className="box-input" id="fBio" type="input" placeholder="" value={fBio} onChange={e => setfBio(e.target.value)}/>
                </div>
                <div className="form-element input" key="3">
                    <label htmlFor="fLocation">Location</label>
                    <input className="box-input" id="fLocation" type="input" placeholder="" value={fLocation} onChange={e => setfLocation(e.target.value)}/>
                </div>
                <div className="form-element input" key="4">
                    <label htmlFor="fWebsite">Website</label>
                    <input className="box-input" id="fWebsite" type="input" placeholder="" value={fWebsite} onChange={e => setfWebsite(e.target.value)}/>
                </div>
                <input type="submit" value="Sunmit Changes Or Click Save"/>
            </form>
            <div className="footer">&nbsp;</div>
        </div>);
}
export default ProfileForm;
