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
        console.log('hmmmmmm... now what?')
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

