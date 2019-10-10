import React from 'react'
import Post from '../postComponents/Post'

class Postings extends React.Component {
    state = {
        postings: []
    }

    componentDidMount(){
        const config = {
            method: 'GET',
            headers: {
                "Authorization": this.props.token
            } 
        }
        fetch('http://localhost:3000/posts', config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                postings: d
            })
        })
    }

    renderAllPostings = () => {
        const subscriptionTopics = this.props.subscriptions.map(t => t.topic_id)
        //this.props.subscriptions.map(t => t.topic_id)
        return this.state.postings
        .filter(pt => pt.user.id !== parseInt(this.props.currentUserId))
        .map( pt => {
            let postTopics = pt.topics.filter( t => !subscriptionTopics.includes(t.id))
            return (postTopics.length === 0) ? <Post post={pt} key={pt.id}/> : null
        })
        // pt.user.id !== parseInt(this.props.currentUserId) &&
        // .map( pt => <Post post={pt} key={pt.id}/>)
    }
    render(){
        return(
            <div className="postings__container">
                <h1>Hi! I'm from all Postings</h1>
                {this.renderAllPostings()}
            </div>
        )
    }
}

export default Postings