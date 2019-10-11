import React from 'react'
import Post from '../postComponents/Post'

const MyPosts = (props) => {
    const renderPosts = props.posts.map(p => <Post post={p} key={p.id} currentUserId={props.currentUserId}/>)
    return(
        <section className="post__container">
            <h1>Your Posts</h1>
            <div className="container">
                {renderPosts}
            </div>
        </section>
    )
}

export default MyPosts