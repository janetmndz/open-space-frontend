import React from 'react'

class SignIn extends React.Component{

    state = {
        logIn: false,
        email: "",
        username: "",
        password: "",
        errors: []
    }

    signInSubmit = e => {
        e.preventDefault()
        console.log("I am trying to be submitted!")
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
            if (d.errors) {this.setState({errors: d.errros}); return;}
            this.props.signInUser(d.token, d.user_id)
        })

        }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        console.log(this.state.errors)
        return(
            <section>
                <h1>Hi! I am from the SignIn!</h1>
                <form onSubmit={ this.signInSubmit }>
                    <label  htmlFor="email">Email</label>
                    <input  id="email" 
                            type="text" 
                            onChange={ this.onChange } 
                            name="email" 
                            value={ this.state.email } />
                    <label  htmlFor="signIn_password">Password</label>
                    <input  id="signIn_password" 
                            type="password" 
                            onChange={ this.onChange } 
                            name="password" 
                            value={ this.state.password } />
                    <input type="submit" value="Sign In" />
                </form>
            </section>
        )
    }
}

export default SignIn