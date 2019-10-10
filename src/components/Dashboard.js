import React from 'react'
import Navigation from './Navigation'

import Mailbox from '../dashboardComponets/Mailbox'
import MyPosts from '../dashboardComponets/MyPosts'
import Postings from '../dashboardComponets/Postings'
import Settings from '../dashboardComponets/Settings'

import { Switch, Route } from 'react-router-dom'


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
                <Navigation logoutUser={this.props.logoutUser}/>
                <Switch>
                    <Route exact path="/" component={ Mailbox }/>
                    <Route exac path="/myposts" component={ MyPosts }/>
                    <Route exact path="/postings" component={ Postings }/>
                    <Route exact path="/settings" component={ Settings }/>
                </Switch>
            </section>
        )
    }
}

export default Dashboard