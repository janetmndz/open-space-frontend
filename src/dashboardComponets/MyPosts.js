import React from 'react'
import Post from '../postComponents/Post'
import EditForm from '../postComponents/EditForm'
import CreateForm from '../postComponents/CreateForm'

class MyPosts extends React.Component {
    state = {
        creating: false,
        editing: false,
        editingPost: {},
        editingPostTopics: [],
        postContent: "",
        postTopics: []
    }

    toggleCreatePost = () => {
        this.setState({
            creating: !this.state.creating
        })
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
    submitnewPost = (e) => {
        e.preventDefault()
        this.props.createPost({ content: this.state.postContent, topics: this.state.postTopics})
        this.setState({
            creating: false,
            postContent: "",
            postTopics: []
        })
    }
    submitChanges = (e) => {
        e.preventDefault()
        this.props.updatePost({content: this.state.postContent, topics: this.state.postTopics}, this.state.editingPostId)
        this.setState({
            editing: false,
            postContent: "",
            postTopics: [],
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
        return this.props.posts.map(p => <Post post={p} key={p.id} currentUserId={this.props.currentUserId} editPost={this.editPost} deletePost={this.props.deletePost}/>)
    }

    render(){
        return(
            <section className="post__container">
                {this.state.editing 
                    ? <div className="post__overlay"><EditForm 
                        topics={this.props.topics} 
                        postTopics={this.state.editingPostTopics} 
                        postContent={this.state.postContent} 
                        onSelectChange={this.onSelectChange} 
                        onChange={this.onChange} 
                        cancelEdit={this.cancelEdit} 
                        submitChanges={this.submitChanges}/></div>
                    : null}
                {this.state.creating 
                    ? <div className="post__overlay"><CreateForm 
                        topics={this.props.topics} 
                        postContent={this.state.postContent} 
                        onSelectChange={this.onSelectChange} 
                        onChange={this.onChange} 
                        submitnewPost={this.submitnewPost} 
                        cancelCreate={this.toggleCreatePost} /></div>
                    : null}
                <h1>Your Posts</h1>
                <button className="newPostButton" onClick={this.toggleCreatePost}>Make a new post</button>
                <div className="container">
                        {this.renderPosts()}
                </div>
            </section>)
    }
}

export default MyPosts