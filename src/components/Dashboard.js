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
        subscriptions: []
    }

    deleteSubscription = (subId) => {
        const config = {
            method: 'DELETE',
            headers: {
                'Authorization': this.props.token,
            }
        }

        fetch(`https://openspace-api.herokuapp.com/subscriptions/${subId}`, config)
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

        fetch(`https://openspace-api.herokuapp.com/subscriptions/`, config)
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

    submitNote = (note) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({note})
        }
        fetch('https://openspace-api.herokuapp.com/notes/', config)
        .then(r => r.json())
        .then(d => {
            if(d.errors){
                window.alert(d.errors.join('\n'))
                return;
            }
            window.alert(d.message)
        })
    }

    createPost = (post) => {
        post.user_id = this.props.currentUserId
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({post})
        }
        fetch('https://openspace-api.herokuapp.com/posts/', config)
        .then(r => r.json())
        .then(d => {
            console.log(d);
            this.setState({
                posts: [
                    ...this.state.posts,
                    d
                ].sort((a, b) => a.id - b.id)
            })
        })
    }

    updatePost = (post, postId) => {
        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
                'Accept': 'application/json'
            },
            body: JSON.stringify({post})
        }

        fetch(`https://openspace-api.herokuapp.com/posts/${postId}`, config)
        .then(r => r.json())
        .then(d => {
            let filteredPost = this.state.posts.filter(p => p.id !== d.id)
            this.setState({
                posts: [
                    ...filteredPost,
                    d
                ].sort((a, b) => a.id - b.id)
            })
        })
    }

    deletePost = (postId) => {
        if (window.confirm("Are you sure you wish to delete this post? You won't be able to see your notes from that post again.")){
            const config = {
                method: 'DELETE',
                headers: {
                    'Authorization': this.props.token,
                }
            }
    
            fetch(`https://openspace-api.herokuapp.com/posts/${postId}`, config)
            .then(r => r.json())
            .then(d => {
                let filteredPosts = this.state.posts.filter( p => p.id !== postId).sort((a, b) => a.id - b.id)
                this.setState({
                    posts: filteredPosts
                })
            })
        }
    }

    componentDidMount(){
        const config = {
            method: 'GET',
            headers: {
                "Authorization": this.props.token
            }
        }
        
        fetch(`https://openspace-api.herokuapp.com/users/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then( d =>{
            this.setState({
                posts: d.posts,
                notes: d.notes,
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
                        <MyPosts posts={this.state.posts} currentUserId={this.props.currentUserId} topics={this.state.subscriptions} createPost={this.createPost} updatePost={this.updatePost} deletePost={this.deletePost}/>
                    }/>
                    <Route exact path="/postings" render={ () => 
                        <Postings token={this.props.token} currentUserId={this.props.currentUserId} subscriptions={this.state.subscriptions} submitNote={this.submitNote}/> 
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