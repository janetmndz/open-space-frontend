import React from 'react'
import EditPostForm from './EditPostForm'
import Post from './Post'

class PostContent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            edited: false,
            postContent: this.props.post.content
        }
    }
    // state={
    //     edited: false,
    //     postContent: '',
    // }
    editPost= () => {
        this.setState({
            edited: true
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitChanges = (e) => {
        e.preventDefault()

        const config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                content: this.state.postContent
            })
        }

        fetch(`http://localhost:3000/posts/${this.props.post.id}`, config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                edited: false,
                postContent: d.content
            })
        })
    }
    cancelEdit = () => {
        this.setState({
            edited: false
        })
    }
    render(){
        return(
            <div className="single_post">
                {this.state.edited 
                    ? <EditPostForm cancelEdit={this.cancelEdit} postContent={this.state.postContent} onChange={this.onChange} submitChanges={this.submitChanges}/> 
                    : <Post post={this.props.post} key={this.props.id} currentUserId={this.props.currentUserId} editPost={this.editPost} />}
            </div>
        )
    }
}
export default PostContent
