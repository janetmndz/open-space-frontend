import React from 'react'

const SignInForm = (props) => {
    return(
        <section className="signin__container">
            <h1>Sign In</h1>
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
            <button onClick={props.changeSignIn}>Create new account</button>
        </section>
    )
}

export default SignInForm