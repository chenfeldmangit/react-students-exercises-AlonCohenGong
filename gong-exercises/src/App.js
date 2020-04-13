import React , {Component} from 'react';
import Navigation from './containers/Navigation';
import News from './containers/News';
import Profile from './containers/Profile';
import Trends from './containers/Trends';
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
        console.log('Profile click')
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
                    <Navigation onNavClick={this.onNavClickHandler} />

                    {!this.state.profileDisplay? <News tweetsSearchTerm={this.state.tweetsSearchTerm} /> : <Profile profile={this.state.profile} onProfileUpdateHanler={this.onProfileUpdateHanler} /> }
                    <Trends onSearchClickHandler={this.onSearchClickHandler}/>

                </div>
            </div>
        );
    }
}

export default App;
