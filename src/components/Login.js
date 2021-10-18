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
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={this.state.name} onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" value={"Login"}>Submit</button>
                <p className="forgot-password text-right">
                    Create Account <a href="/create_account">Here</a>
                </p>
            </form>
        )
    }
}

export default Login;

