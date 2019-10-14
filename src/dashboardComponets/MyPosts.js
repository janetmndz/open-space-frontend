import React from 'react'
import PostContainer from '../postComponents/PostContent'

const MyPosts = (props) => {
    const renderPosts = () => {
        return props.posts.map(p => <PostContainer post={p} key={p.id} currentUserId={props.currentUserId}/>)
    }

    return(
        <section className="post__container">
            <h1>Your Posts</h1>
            <div className="container">
                    {renderPosts()}
            </div>
        </section>
        )
}

export default MyPosts