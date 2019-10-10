import React from 'react'


class Dashboard extends React.Component{

    componentDidMount(){
        const config = {
            method: 'GET',
            headers: {
                "Authorization": this.props.token
            } 
        }
        fetch(`http://localhost:3000/users/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then(console.log)
    }

    render(){
        return(
            <section>
                <button onClick={this.props.logoutUser}>Log me out</button>
                <h1>Hi! I am from the Dashboard!</h1>
            </section>
        )
    }
}

export default Dashboard