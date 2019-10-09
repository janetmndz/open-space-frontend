import React from 'react'
import Dashboard from './components/Dashboard' 
import SignIn from './components/SignIn'

class App extends React.Component {
  state = {
    loggedUser: null,
    token: null
  }

  componentDidMount(){
    this.setState({
      token: localStorage.token
    })
  }

  isLoggedIn = () => {
    return !!this.state.token
  }

  render() {
    console.log(this.state.token)
    return (
      <main>
        {this.isLoggedIn() ? <Dashboard /> : <SignIn />}
      </main>
    )
  }
}

export default App;
