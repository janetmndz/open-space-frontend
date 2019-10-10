import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

class SignIn extends React.Component{

    state = {
        signIn: true,
        email: "",
        username: "",
        password: "",
        errors: []
    }

    signInSubmit = e => {
        e.preventDefault()
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }
        fetch('http://localhost:3000/tokens', config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                email: "",
                username: "",
                password: ""
            })
            if (d.errors) {this.setState({errors: d.errors}); return;}
            this.props.signInUser(d.token, d.user_id)
        })
    }

    changeSignIn = () => {
        this.setState({
            email: "",
            password: "",
            username: "",
            signIn: !this.state.signIn
        })
    }

    signUpSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            })
        }

        fetch('http://localhost:3000/users', config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                email: "",
                username: "",
                password: ""
            })
            if (d.errors) {this.setState({errors: d.errors}); return;}
            this.props.signInUser(d.token, d.user_id)
        })
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    mapErrors = () => {
        return this.state.errors.map( err => <p> {err} </p>)
    }

    render(){
        return(
            <>
            <div className="signIn__error_box">{this.state.errors.length > 0 ? this.mapErrors() : null}</div>
            {this.state.signIn ? <SignInForm changeSignIn={this.changeSignIn} signInSubmit={this.signInSubmit} onChange={this.onChange} state={this.state}/> : <SignUpForm changeSignIn={this.changeSignIn} signUpSubmit={this.signUpSubmit} onChange={this.onChange} state={this.state}/>}
            </>
        )
    }
}

export default SignIn