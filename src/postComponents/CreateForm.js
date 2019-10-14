import React from 'react'

const CreateForm = (props) => {
    return(
        <div className="editPost__container">
            <h1>I am a new post!</h1>
            <button onClick={props.cancelCreate}>Cancel Create</button>
        </div>
    )
}
export default CreateForm