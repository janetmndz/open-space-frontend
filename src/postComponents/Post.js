import React from 'react'

const Post = (props) => {
    const isThisCurrentUser = () => {
        return (props.post.user.id !== parseInt(props.currentUserId))
    }
    const renderWithUserName = () => {
        if (!props.post.user.id) {return null}
        return ( isThisCurrentUser() ) 
        ? <p className="author">submitted by: {props.post.user.username}</p>
        : null
    }
    const renderTopicLabels = () => {
        return props.post.topics.map( t => <li className="topic__label" key={t.id}>{t.topic_type}</li>)
    }
    const renderPostNav = () => {
        let notesNum = !!props.post.notes ? props.post.notes.length : 0
        return( 
        <div className="post__actions">
            {(isThisCurrentUser()) 
            ? <button onClick={() => props.replyNote(props.post.id)}>Reply to this Post</button>
            : <> <button onClick={() => props.showNotes(props.post.notes)}>Notes [{notesNum}]</button><button onClick={() => props.editPost(props.post)}>Edit</button> <button onClick={() => props.deletePost(props.post.id)}>Delete</button> </>}
        </div>)
    }
    return(
        <div className="single_post">
            <div className="single_post__content">
                <p>{props.post.content}</p>
                { renderWithUserName() }
                <ul className="topic_list">
                    {renderTopicLabels()}
                </ul>
            </div>
            { renderPostNav() }
            
        </div>
    )
}
export default Post
