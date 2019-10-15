import React from 'react'

const CreateForm = (props) => {
    const makeOptions = () => {
        return props.topics.map(t => <option key={t.topic_id} value={t.topic_id}> {t.topic_type} </option>)
    }
    return(
        <div className="post_form__container">
            <form className="post_form" onSubmit={props.submitnewPost}>
                <label htmlFor="postContent">Post Content</label>
                <textarea id="postContent" name="postContent" value={props.postContent} onChange={props.onChange}></textarea>
                <label htmlFor="postTopics">Select Topics</label>
                <select id="postTopics" name="postTopics" multiple size="4" onChange={props.onSelectChange}>
                    {makeOptions()}
                </select>
                <input type="submit" name="submit" value="Submit Post"/>
            </form>
            <button className="cancel_button" onClick={props.cancelCreate}>x</button>
        </div>
    )
}
export default CreateForm