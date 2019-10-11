import React from 'react'

const Post = (props) => {
    const renderWithUserName = () => {
        if (!props.post.user.id) {return null}
        return ( props.post.user.id !== parseInt(props.currentUserId)) 
        ? <p>By: {props.post.user.username}</p> 
        : null
    }
    return(
        <div className="single__post">
            <p>{props.post.content}</p>
            { renderWithUserName() }
        </div>
    )
}
export default Post