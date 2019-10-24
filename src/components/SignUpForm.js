import React from 'react'

const SignUpForm = (props) => {
    return(
        <>
        {/* <h1 className="logo_title">Open Space</h1> */}
        <section className="signin__container">
            <h2>Sign Up</h2>
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
                <input type="submit" value="Sign Up" />
            </form>
            <button className="change_form" onClick={props.changeSignIn}>I already have an account</button>
        </section>
        </>
    )
}

export default SignUpForm