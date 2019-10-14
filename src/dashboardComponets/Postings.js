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
        fetch(`http://localhost:3000/postings/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                postings: d
            })
        })
    }

    renderAllPostings = () => {
        return (this.state.postings.length !== 0) 
            ? this.state.postings.map( pt => <Post post={pt} key={pt.id} currentUserId={this.props.currentUserId}/>) 
            : <p>There are no posts to show</p>
    }

    render(){
        return(
            <section className="post__container">
                <h1>Postings</h1>
                <div className="container">
                    {this.renderAllPostings()}
                </div>
            </section>
        )
    }
}

export default Postings