import React from 'react'

const Post = (props) => {
    return(
        <div className="single__post" style={{border:"1px solid red", borderRadius:"3px", width: "25%", padding: "1rem"}}>
            <p>{props.post.content}</p>
        </div>
    )
}
export default Post