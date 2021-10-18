import React from 'react';
import { DirectUpload } from 'activestorage';

class CreateAccount extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            password: '',
            avatar: {}
        }
    }

    handleOnChange = (event) => {
        if (event.target.name === 'avatar') {
            this.setState({
                [event.target.name]: event.target.files[0]
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        let user = {
            name: this.state.name,
            password: this.state.password
        }

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => this.uploadFile(this.state.avatar, data))
    }

    uploadFile = (file, user) => {
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {
                fetch(`http://localhost:3000/users/${user.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({avatar: blob.signed_id})
                })
                .then(response => response.json())
                .then(result => console.log(result))
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <h3>Create an Account</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" value={this.state.name} onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label>Avatar</label>
                    <input type="file" className="form-control" onChange={this.handleOnChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" value='Create My Account'>Create Account</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">sign in?</a>
                </p>
            </form>
        )
    }

}

export default CreateAccount;