import React from 'react'
import Post from '../postComponents/Post'

const MyPosts = (props) => {
    const renderPosts = props.posts.map(p => <Post post={p} key={p.id} currentUserId={props.currentUserId}/>)
    return(
        <div className="post__container">
            <h1>Hi! I'm from the MyPosts!</h1>
            {/* {renderPosts} */}
        </div>
    )
}

export default MyPosts