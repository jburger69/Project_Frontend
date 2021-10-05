import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/NavBar';

class App extends React.Component {

    render(){
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </Router>
        )
    }

}

export default App;