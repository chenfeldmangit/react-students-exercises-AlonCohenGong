import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './containers/Navigation';
import News from './containers/News';
import Profile from './containers/Profile';
import Trends from './containers/Trends';
import NotificationsConintainer from './containers/NotificationsContainer';
import {profile} from './JSON/profile';
import './css/main.css';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileDisplay: false,
            tweetsSearchTerm: '',
            profile: {...profile},
        };

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


    render() {
        return (
            <div className="App main">
                <div className="header"><h1>Tweeter</h1></div>
                <div className="main">
                    <BrowserRouter>
                        <Navigation onNavClick={this.onNavClickHandler} />
                       <Switch>
                           <Route path="/" component={()=><News tweetsSearchTerm={this.state.tweetsSearchTerm} />} exact/>
                           <Route path="/News" component={()=><News tweetsSearchTerm={this.state.tweetsSearchTerm} />}/>
                           <Route path="/Notifications" component={()=><NotificationsConintainer />}/>
                           <Route path="/Profile" component={()=> <Profile profile={this.state.profile} onProfileUpdateHanler={this.onProfileUpdateHanler} /> }/>
                           <Route component={()=><div><h1> Page Not Found </h1></div>}/>
                       </Switch>
                    </BrowserRouter>
                    <Trends onSearchClickHandler={this.onSearchClickHandler}/>

                    {/*
                    {this.state.profileDisplay ? <News tweetsSearchTerm={this.state.tweetsSearchTerm} /> : <NotificationsConintainer /> }
                    {!this.state.profileDisplay ? <News tweetsSearchTerm={this.state.tweetsSearchTerm} /> : <Profile profile={this.state.profile} onProfileUpdateHanler={this.onProfileUpdateHanler} />*/}
                </div>
            </div>
        );
    }
}

export default App;
