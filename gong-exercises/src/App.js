import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as appActions from './actions/appActions';
import Navigation from './containers/Navigation';
import News from './containers/News';
import Profile from './containers/Profile';
import Trends from './containers/Trends';
import NotificationsConintainer from './containers/NotificationsContainer';
import Loginform from './components/login/LoginForm';
import {profile} from './JSON/profile';
import DbApi from "./data/DbApi";
import './css/main.css';

import './App.css';
import Modal from "./UI/Modal";

let navItems = [
    {link: 'News', caption: 'Home', img: 'home.svg', event: 'home'},
    {link: 'Explore', caption: 'Explore', img: 'explore.svg', event: 'home'},
    {link: 'Notifications', caption: 'Notification', img: 'notification.svg', event: 'home'},
    {link: 'Messages', caption: 'Messages', img: 'messages.svg', event: 'home'},
    {link: 'Profile', caption: 'Profile', img: 'explore.svg', event: 'profile'},
    {link: 'Bookmarks', caption: 'Bookmarks', img: 'bookmarks.svg', event: 'home'}
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileDisplay: false,
            tweetsSearchTerm: '',
            profile: {...profile},
            loadLogin: false,
        };

    }

    isLoggedIn = async () => {
        const login = await DbApi.getUserLogIn({});
        return !!login.email;
    };

    componentDidMount() {
        const loginCred = this.isLoggedIn().then((res)=>{
            if(res){
                console.log("componentDidMount login",loginCred);
                this.props.dispatch(appActions.loginUser ({
                    name: loginCred.name,
                    email: loginCred.email,
                    loggedIn: true,
                }));
            }
        });

    }


    onNavClickHandler = (navId) => {
        console.log('Profile click');
        this.setState((state)=>({
            profileDisplay: navId==='profile'? true : false,
        }));
    };

    onProfileUpdateHanler = (pSettings) => {
        console.log('onProfileUpdateHanler', pSettings);
        this.setState({
            profile: {...pSettings},
        })
    };

    onSearchClickHandler = (searchVal)=>{
        console.log('onSearchClickHandler', searchVal);
        this.setState({tweetsSearchTerm: searchVal});
    };

    loadLogin = () => {
        console.log('Load Login');
        //open Modal
        this.setState((state)=>({loadLogin: !state.loadLogin}));
    };
    onLoginSaveHandler = (loginCred) => {
        if(loginCred.email.length && loginCred.passwd.length) {
            console.log(' Login Save xxxxxxxxxxxxxxxxxxxx', loginCred);
            DbApi.setUserLogIn(loginCred);
            this.props.dispatch(appActions.loginUser ({
                name: loginCred.name,
                email: loginCred.email,
                loggedIn: true,
            }));
        }

    };
    onLogOutHandler = () => {
        if(this.props.login?.loggedIn) {
            console.log(' LogOut');
            DbApi.setUserLogOut();
            this.props.dispatch(appActions.logoutUser());
        }

    };


    render() {
        const likesCount = this.props.tweets.tweetsList.reduce((total, tweet)=>(total + (+!!tweet.liked)),0);
        navItems = navItems.map((item) => (item.link === 'Notifications' /*&& this.props.tweets.tweetsList*/
            ? {...item, badge: likesCount} :
            item));

        return (
            <>
                {this.state.loadLogin
                && <Modal>
                     <Loginform toggleModal={this.loadLogin} onLoginSave={this.onLoginSaveHandler}/>
                </Modal>}
            <div className="header">
                <div className="logo"><h1>Tweeter</h1></div>
                <div className="login">
                    {this.props.login?.loggedIn ? <button className="button" onClick={this.onLogOutHandler}>Log Out</button>
                        : <button onClick={this.loadLogin} className="button">Log In</button>}

                </div>
            </div>
            <div className="App main">
                <div className="main">

                    <BrowserRouter>
                        <Navigation onNavClick={this.onNavClickHandler} navItems={navItems} />

                        {this.props.login?.loggedIn
                        ?(<Switch>
                            <Route path="/" exact >
                                <News tweetsSearchTerm={this.state.tweetsSearchTerm}/>
                            </Route>
                            <Route path="/News" exact >
                                <News tweetsSearchTerm={this.state.tweetsSearchTerm}/>
                            </Route>
                            <Route path="/Notifications" component={() => <NotificationsConintainer/>}/>
                            <Route path="/Profile" component={() => <Profile profile={this.state.profile}
                                                                             onProfileUpdateHanler={this.onProfileUpdateHanler}/>}/>
                            <Route component={() => <div><h1> Page Not Found </h1></div>}/>
                        </Switch>)
                        : (<div> YOU ARE NOT LOGGED IN <br /> pLEASE CLICK "Log In"</div>)}


{/* this row causing the news to re-build again -- infinite loop
   <Route path="/" component={() => <News tweetsSearchTerm={this.state.tweetsSearchTerm}/>}
   exact/>

<Route path="/News"
   component={() => <News tweetsSearchTerm={this.state.tweetsSearchTerm}/>} exact/>
*/}

                    </BrowserRouter>
                    <Trends onSearchClickHandler={this.onSearchClickHandler}/>

                    {/*
                    {this.state.profileDisplay ? <News tweetsSearchTerm={this.state.tweetsSearchTerm} /> : <NotificationsConintainer /> }
                    {!this.state.profileDisplay ? <News tweetsSearchTerm={this.state.tweetsSearchTerm} /> : <Profile profile={this.state.profile} onProfileUpdateHanler={this.onProfileUpdateHanler} />*/}
                </div>
            </div>
                </>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        login: state.appLogin.login,
        tweets: state.tweets,
    };
};
export default connect(mapStateToProps)(App);
