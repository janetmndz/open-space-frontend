import React from 'react'

const Note = props => {
    return(
        <div className="single__note" style={{border:"1px solid red", borderRadius:"3px", width: "25%", padding: "1rem"}}>
            <p>{props.note.content}</p>
            <p>From: {props.note.username}</p>
        </div>
    )
}

export default Note