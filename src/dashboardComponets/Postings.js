import React from 'react'
import Post from '../postComponents/Post'
import ReplyForm from '../notesComponents/ReplyForm'

class Postings extends React.Component {
    state = {
        replying: false,
        replyingPostId: null,
        replyContent: '',
        postings: []
    }

    replyNote = (postId) => {
        this.setState({
            replying: true,
            replyingPostId: postId
        })
    }

    cancelReply = () => {
        this.setState({
            replying: false,
            replyingPostId: null
        })
    }

    onChange = (e) => {
        if (e.target.value.length < 140){
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    submitReply = (e) => {
        e.preventDefault()
        let note = {
            post_id: this.state.replyingPostId,
            content: this.state.replyContent,
            user_id: this.props.currentUserId
        }
        this.props.submitNote(note)
        this.setState({
            replying: false,
            replyingPostId: null,
            replyContent: ''
        })
    }

    renderAllPostings = () => {
        return (this.state.postings.length !== 0) 
            ? this.state.postings.map( pt => <Post post={pt} key={pt.id} currentUserId={this.props.currentUserId} replyNote={this.replyNote}/>) 
            : <p>There are no posts to show</p>
    }

    componentDidMount(){
        const config = {
            method: 'GET',
            headers: {
                "Authorization": this.props.token
            } 
        }
        fetch(`https://openspace-api.herokuapp.com/postings/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                postings: d
            })
        })
    }


    render(){
        return(
            <section className="post__container">
                {this.state.replying 
                    ? <div className="post__overlay"><ReplyForm cancelReply={this.cancelReply} submitReply={this.submitReply} onChange={this.onChange} replyContent={this.state.replyContent}/></div>
                    : null}
                <h1>Postings</h1>
                <div className="container">
                    {this.renderAllPostings()}
                </div>
            </section>
        )
    }
}

export default Postings