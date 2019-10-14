import React from 'react'
import Navigation from './Navigation'

// import Mailbox from '../dashboardComponets/Mailbox'
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

    deleteSubscription = (subId) => {
        const config = {
            method: 'DELETE',
            headers: {
                'Authorization': this.props.token,
            }
        }

        fetch(`http://localhost:3000/subscriptions/${subId}`, config)
        .then(r => r.json())
        .then(d => {
            let newSubs = this.state.subscriptions.filter(s => s.id !== subId)
            this.setState({
                subscriptions: newSubs
            })
        })
    }

    addSubscription = (topicId) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            },
            body: JSON.stringify({
                "topic_id": topicId,
                "user_id": this.props.currentUserId
            })
        }

        fetch(`http://localhost:3000/subscriptions/`, config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                subscriptions: [
                    ...this.state.subscriptions,
                    d
                ]
            })
        })
    }

    updatePost = (post, postId) => {
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({post})
        }

        fetch(`http://localhost:3000/posts/${postId}`, config)
        .then(r => r.json())
        .then(d => {
            let filteredPost = this.state.posts.filter(p => p.id !== d.id)
            this.setState({
                posts: [
                    ...filteredPost,
                    d
                ]
            })
        })
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
            <>
                <Navigation logoutUser={this.props.logoutUser}/>
                <Switch>
                    {/* <Route exact path="/" render={ () => 
                        <Mailbox posts={this.state.posts} recieved_notes={this.state.recieved_notes}/> 
                    }/> */}
                    <Route exact path="/" render={ () => 
                        <MyPosts posts={this.state.posts} currentUserId={this.props.currentUserId} topics={this.state.subscriptions} updatePost={this.updatePost}/>
                    }/>
                    <Route exact path="/postings" render={ () => 
                        <Postings token={this.props.token} currentUserId={this.props.currentUserId} subscriptions={this.state.subscriptions}/> 
                    }/>
                    <Route exact path="/settings" render={ () => 
                        <Settings token={this.props.token} currentUserId={this.props.currentUserId} addSubscription={this.addSubscription} subscriptions={this.state.subscriptions} deleteSubscription={this.deleteSubscription}/> 
                    }/>
                </Switch>
            </>
        )
    }
}

export default Dashboard