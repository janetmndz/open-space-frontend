import React from 'react'

const SignUpForm = (props) => {
    return(
        <section>
            <h1>Hi! I am from the Sign Up!</h1>
            <form onSubmit={ props.signUpSubmit }>
                <label  htmlFor="email">Email</label>
                <input  id="email" 
                        type="text" 
                        onChange={ props.onChange } 
                        name="email" 
                        value={ props.state.email } />
                <label  htmlFor="username">Username</label>
                <input  id="username" 
                        type="text" 
                        onChange={ props.onChange } 
                        name="username" 
                        value={ props.state.username } />
                <label  htmlFor="signIn_password">Password</label>
                <input  id="signIn_password" 
                        type="password" 
                        onChange={ props.onChange } 
                        name="password" 
                        value={ props.state.password } />
                <input type="submit" value="Sign up" />
            </form>
            <button onClick={props.changeSignIn}>I want to Sign In!</button>
        </section>
    )
}

export default SignUpForm