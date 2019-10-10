import React from 'react'
import Dashboard from './components/Dashboard' 
import SignIn from './components/SignIn'

class App extends React.Component {
  state = {
    currentUserId: null,
    token: null
  }

  isLoggedIn = () => {
    return !!this.state.token
  }

  signInUser = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId 
    this.setState({
      token: token,
      currentUserId: userId
    })
  }

  logoutUser = () => {
    delete localStorage.token
    delete localStorage.userId
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token,
      currentUserId: localStorage.userId
    })
  }

  render() {
    console.log(this.state.token)
    return (
      <main>
        {this.isLoggedIn() ? <Dashboard currentUserId={this.state.currentUserId} token={this.state.token} logoutUser={this.logoutUser}/> : <SignIn signInUser={this.signInUser}/>}
      </main>
    )
  }
}

export default App;
