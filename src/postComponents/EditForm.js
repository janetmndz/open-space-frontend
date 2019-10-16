import React from 'react'

const EditPostForm = (props) => {
    const makeOptions = () => {
        return props.topics.map(t => <option key={t.topic_id} value={t.topic_id}> {t.topic_type} </option>)            
    }
    return(
        <div className="post_form__container">
            <form className="post_form" onSubmit={props.submitChanges}>
                <label htmlFor="postContent">Post Content</label>
                <textarea id="postContent" name="postContent" value={props.postContent} onChange={props.onChange}></textarea>
                <label htmlFor="postTopics">Select Topics</label>
                <select id="postTopics" name="postTopics" multiple size="15" defaultValue={props.postTopics.map(t => t.id)} onChange={props.onSelectChange}>
                    {makeOptions()}
                </select>
                <input type="submit" name="submit" value="Submit Edit"/>
            </form>
            <button name="cancelEdit" className="cancel_button" onClick={() => props.cancelEdit()}>x</button>
        </div>
    )
}

export default EditPostForm