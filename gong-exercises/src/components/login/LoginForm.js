import React, { useState } from 'react';
import '../../css/editProfile.css';

function Loginform (props) {
    const [fName, setfName] = useState('');
    const [fEmail, setfEmail] = useState('');
    const [fPasswd, setfPasswd] = useState('');

    const handelSubmit = (e)=>{
        e.preventDefault();

        const loginCred = {
            name: fName,
            email: fEmail,
            passwd: fPasswd,
        };
        props.onLoginSave(loginCred);
        props.toggleModal();
        console.log('form submit');
    }
    return (
        <div className="modal profile-wrapper" id="modal">
            <div className="header">
                <div className="closex" onClick={props.toggleModal}>X</div>
                <div className="title">Login User</div>
                <div className="space"></div>
                <div className="save">
                    <button className="button" id="profileSaveButton" onClick={handelSubmit}>Save</button>
                </div>
            </div>



            <form className="modal-form" method="post" onSubmit={handelSubmit}>
                <div className="form-element input" key="1">
                    <label htmlFor="fName">Name</label>
                    <input className="box-input" id="fName" type="input" placeholder="" value={fName} onChange={e => setfName(e.target.value)}/>
                </div>
                <div className="form-element input" key="2">
                    <label htmlFor="fBio">Email</label>
                    <input className="box-input" id="fBio" type="input" placeholder="" value={fEmail} onChange={e => setfEmail(e.target.value)}/>
                </div>
                <div className="form-element input" key="3">
                    <label htmlFor="fLocation">Password</label>
                    <input className="box-input" id="fLocation" type="input" placeholder="" value={fPasswd} onChange={e => setfPasswd(e.target.value)}/>
                </div>
                <input type="submit" value="Sunmit Changes Or Click Save"/>
            </form>
            <div className="footer">&nbsp;</div>
        </div>);
}
export default Loginform;
