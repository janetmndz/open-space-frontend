import React from 'react'

const SignInForm = (props) => {
    return(
        <>
        <h1 className="logo_title">Open Space</h1>
        <section className="signin__container">
            <h2>Sign In</h2>
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
            <button className="change_form" onClick={props.changeSignIn}>I don't have an account</button>
        </section>
        </>
    )
}

export default SignInForm