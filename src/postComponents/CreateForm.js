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
                <p className="character_remaining">{140 - props.postContent.length} characters remaining</p>
                <label htmlFor="postTopics">Select Topics</label>
                <select id="postTopics" name="postTopics" multiple size="15" onChange={props.onSelectChange}>
                    {makeOptions()}
                </select>
                <p className="please_dont">Please only select 3-4 topics</p>
                <input type="submit" name="submit" value="Submit Post"/>
            </form>
            <button className="cancel_button" onClick={props.cancelCreate}>x</button>
        </div>
    )
}
export default CreateForm