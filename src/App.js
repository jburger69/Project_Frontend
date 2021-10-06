import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Profile from './components/Profile';

class App extends React.Component {


    constructor() {
        super()
        this.state = {
            CurrentUser: null,
            CurrentAvatar: null
        }
    }

    setCurrentUser = (data) => {
        this.setState({
            CurrentUser: data.user,
            CurrentAvatar: data.avatar
        })
    }

    render(){
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props} />} />
                    <Route path='/profile' render={() => {
                        return this.state.CurrentUser ? (
                            <Profile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar} />
                        ) : (
                            <Login setCurrentUser={this.setCurrentUser} />
                        )
                    }} />
                </Switch>
            </Router>
        )
    }

}

export default App;