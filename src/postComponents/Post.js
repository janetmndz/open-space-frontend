import React from 'react'
// import Content from './Content'

// class Post extends React.Component {
//     render(){
//         return(
//             <div className="single_post">
//                 {<Content post={this.props.post} key={this.props.id} currentUserId={this.props.currentUserId} editPost={this.props.editPost} deletePost={this.props.deletePost}/>}
//             </div>
//         )
//     }
// }

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
        return( 
        <div className="post__actions">
            {(isThisCurrentUser()) 
            ? <button>Reply to this Post</button>
            : <> <button>Notes</button><button onClick={() => props.editPost(props.post)}>Edit</button> <button onClick={() => props.deletePost(props.post.id)}>Delete</button> </>}
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
