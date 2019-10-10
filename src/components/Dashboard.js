import React from 'react'
import Navigation from './Navigation'

import Mailbox from '../dashboardComponets/Mailbox'
import MyPosts from '../dashboardComponets/MyPosts'
import Postings from '../dashboardComponets/Postings'
import Settings from '../dashboardComponets/Settings'

import { Switch, Route } from 'react-router-dom'


class Dashboard extends React.Component{
    state = {
        posts: [],
        notes: [],
        recieved_notes: [],
        subscriptions: []
    }

    componentDidMount(){
        const config = {
            method: 'GET',
            headers: {
                "Authorization": this.props.token
            } 
        }
        fetch(`http://localhost:3000/users/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then( d =>{
            console.log(d)
            this.setState({
                posts: d.posts,
                notes: d.notes,
                recieved_notes: d.recieved_notes,
                subscriptions: d.subscriptions
            })
        }
        )
    }

    render(){
        return(
            <section>
                <Navigation logoutUser={this.props.logoutUser}/>
                <Switch>
                    <Route exact path="/" render={ () => 
                        <Mailbox posts={this.state.posts} recieved_notes={this.state.recieved_notes}/> 
                    }/>
                    <Route exac path="/myposts" render={ () => 
                        <MyPosts posts={this.state.posts}/>
                    }/>
                    <Route exact path="/postings" render={ () => 
                        <Postings token={this.props.token} currentUserId={this.props.currentUserId} subscriptions={this.state.subscriptions}/> 
                    }/>
                    <Route exact path="/settings" component={ Settings }/>
                </Switch>
            </section>
        )
    }
}

export default Dashboard