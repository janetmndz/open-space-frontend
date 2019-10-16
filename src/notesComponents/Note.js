import React from 'react'

const Note = props => {
    return(
        <div className="single__note">
            <p>{props.note.content}</p>
            <p>From: {props.note.username}</p>
        </div>
    )
}

export default Note