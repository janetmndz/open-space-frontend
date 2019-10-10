import React from 'react'

const SignInForm = (props) => {
    return(
        <section>
            <h1>Hi! I am from the SignIn!</h1>
            <form onSubmit={ props.signInSubmit }>
                <label  htmlFor="email">Email</label>
                <input  id="email" 
                        type="text" 
                        onChange={ props.onChange } 
                        name="email" 
                        value={ props.state.email } />
                <label  htmlFor="signIn_password">Password</label>
                <input  id="signIn_password" 
                        type="password" 
                        onChange={ props.onChange } 
                        name="password" 
                        value={ props.state.password } />
                <input type="submit" value="Sign In" />
            </form>
            <button onClick={props.changeSignIn}>I want to Sign Up!</button>
        </section>
    )
}

export default SignInForm