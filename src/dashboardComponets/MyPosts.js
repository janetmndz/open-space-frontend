import React from 'react'
import Post from '../postComponents/Post'
import ShowNotes from '../notesComponents/ShowNotes' 
import EditForm from '../postComponents/EditForm'
import CreateForm from '../postComponents/CreateForm'

class MyPosts extends React.Component {
    state = {
        showing: false,
        showingNotes: [],
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

    showNotes = (notes) => {
        if (notes.length === 0) {return}
        this.setState({
            showing: true,
            showingNotes: notes
        }) 
    }

    cancelShow = () => {
        this.setState({
            showing: false,
            showingNotes: []
        })
    }

    renderPosts = () => {
        return this.props.posts.map(p => <Post post={p} key={p.id} currentUserId={this.props.currentUserId} showNotes={this.showNotes} editPost={this.editPost} deletePost={this.props.deletePost}/>)
    }

    render(){
        return(
            <section className="post__container">
                {this.state.showing 
                    ? <div className="post__overlay"><ShowNotes 
                        notes={this.state.showingNotes}
                        cancelShow={this.cancelShow}/></div> 
                    : null}
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