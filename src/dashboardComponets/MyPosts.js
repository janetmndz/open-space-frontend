import React from 'react'
import Post from '../postComponents/Post'
import EditForm from '../postComponents/EditForm'

class MyPosts extends React.Component {
    state = {
        editing: false,
        editingPost: {},
        editingPostTopics: [],
        postContent: "",
        postTopics: []
    }

    deletePost = () => {
        if (window.confirm("Are you sure you wish to delete this post? You won't be able to see your notes from that post again.")){
            console.log("AHHH")
        }
    }
    editPost= (post_obj) => {
        this.setState({
            editing: true,
            editingPostId: post_obj.id,
            editingPostTopics: post_obj.topics,
            postContent: post_obj.content
        })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSelectChange = (e) => {
        let selected = [...e.target.options].filter(option => option.selected).map(option => option.value)
        this.setState({
            [e.target.name]: selected
        })
    }
    submitChanges = (e) => {
        e.preventDefault()
        this.props.updatePost({content: this.state.postContent, topics: this.state.postTopics}, this.state.editingPostId)
        this.setState({
            editing: false,
            postContent: "",
            editingPostId: "",
            editingPostTopics: []
        })
    }
    cancelEdit = () => {
        this.setState({
            editing: false,
            postContent: "",
            editingPostId: "",
            editingPostTopics: []
        })
    }


    renderPosts = () => {
        return this.props.posts.map(p => <Post post={p} key={p.id} currentUserId={this.props.currentUserId} editPost={this.editPost} deletePost={this.deletePost}/>)
    }

    render(){
        return(
            <section className="post__container">
                {this.state.editing 
                    ? <EditForm topics={this.props.topics} postTopics={this.state.editingPostTopics} postContent={this.state.postContent} onSelectChange={this.onSelectChange} onChange={this.onChange} cancelEdit={this.cancelEdit} submitChanges={this.submitChanges}/> 
                    : null}
                <h1>Your Posts</h1>
                <div className="container">
                        {this.renderPosts()}
                </div>
            </section>)
    }
}

export default MyPosts