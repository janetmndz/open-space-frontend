import React from 'react'

const Post = (props) => {
    const isThisCurrentUser = () => {
        return (props.post.user.id !== parseInt(props.currentUserId))
    }
    const renderWithUserName = () => {
        if (!props.post.user.id) {return null}
        return ( isThisCurrentUser() ) 
        ? <p>By: {props.post.user.username}</p>
        : null
    }
    const renderTopicLabels = () => {
        return props.post.topics.map( t => <li className="topic__label" key={t.id}>{t.topic_type}</li>)
    }
    const renderPostNav = () => {
        return( 
        <div className="post__actions">
            {(isThisCurrentUser()) 
            ? <button>Reply to this Post</button>
            : <> <button>Edit this Post</button> <button>Delete this Post</button> </>}
        </div>)
    }
    return(
        <div className="single_post">
            <p>{props.post.content}</p>
            { renderWithUserName() }
            <ul className="single_post__topic_list">
                {renderTopicLabels()}
            </ul>
            { renderPostNav() }
            
        </div>
    )
}
export default Post