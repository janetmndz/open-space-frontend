import React from 'react'

const EditPostForm = (props) => {
    // const [limitHit, changeLimit] = useState(true)
    const makeOptions = () => {
        return props.topics.map(t => <option key={t.topic_id} value={t.topic_id}> {t.topic_type} </option>)
    }
    // const characterLimit = (e) => {
    //     if (props.postContent.length > 140) {changeLimit(false)}
    //     console.log(props.postContent.length)
    //     return limitHit ? props.onChange(e) : console.log("limit was hit")
    // // }
    // console.log(props.characterLimit)
    return(
        <div className="post_form__container">
            <form className="post_form" onSubmit={props.submitChanges}>

                <label htmlFor="postContent">Post Content</label>
                <textarea id="postContent" name="postContent" value={props.postContent} onChange={(e) => props.onChange(e)}></textarea>
                <p className="character_remaining">{140 - props.postContent.length} characters remaining</p>

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