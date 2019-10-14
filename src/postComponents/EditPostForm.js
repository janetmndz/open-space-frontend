import React from 'react'

const EditPostForm = (props) => {
    return(
        <>
        <form onSubmit={props.submitChanges}>
            <label htmlFor="postContent">Content</label>
            <textarea id="postContent" name="postContent" value={props.postContent} onChange={props.onChange}></textarea>
            <button type="submit">Edit Post</button>
        </form>
        <button onClick={() => props.cancelEdit()}>Cancel</button>
        </>
    )
}

export default EditPostForm