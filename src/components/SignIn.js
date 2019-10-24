import React from 'react'
// import logo from '../assets/rocket.svg'
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
        fetch('https://openspace-api.herokuapp.com/tokens', config)
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

        fetch('https://openspace-api.herokuapp.com/users', config)
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
        return <div className="signIn__error_box">{this.state.errors.map( err => <p> {err} </p>)}</div>
    }

    render(){
        return(
            <>
            <h1 className="logo_title">Open Space</h1>
            {/* <img className="logo_svg" src={logo} alt="Open Space rocket logo"/> */}
            {this.state.errors.length > 0 
                ? this.mapErrors() 
                : null}
            {this.state.signIn 
                ? <SignInForm 
                    changeSignIn={this.changeSignIn} 
                    signInSubmit={this.signInSubmit} 
                    onChange={this.onChange} 
                    state={this.state}/> 
                : <SignUpForm 
                    changeSignIn={this.changeSignIn} 
                    signUpSubmit={this.signUpSubmit} 
                    onChange={this.onChange} 
                    state={this.state}/>}
            </>
        )
    }
}

export default SignIn