import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Profile from './components/Profile';
import CreateAccount from './components/CreateAccount';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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

    logout = () => {
        this.setState({
            CurrentUser: null,
            CurrentAvatar: null
        })
    }

    render(){
        return (
            <Router>
                <Navbar currentUser={this.state.CurrentUser} logout={this.logout}/>
                <div className="App">
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                        <Switch>
                        <Route path='/' exact component={Home} />
                                    <Route path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} routerProps={props} />} />
                                    <Route path='/profile' render={() => {
                                        return this.state.CurrentUser ? (
                                            <Profile currentUser={this.state.CurrentUser} currentAvatar={this.state.CurrentAvatar} />
                                        ) : (
                                            <Redirect to='/login' />
                                        )
                                    }} />
                                    <Route path='/create_account' component={CreateAccount} />
                        </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

}

export default App;