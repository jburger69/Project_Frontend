import React from 'react';

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }

    
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let user = {
            name: this.state.name,
            password: this.state.password
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            this.props.setCurrentUser(data)
            this.props.routerProps.history.push('/profile')
        })
    }





    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}></input>
                <label>Password:</label>
                <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange}></input>
                <input type='submit' value={"Login"}></input>
            </form>
        )
    }




}

export default Login;

