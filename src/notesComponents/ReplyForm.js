import React from 'react'

const ReplyForm = (props) => {
    return(
        <div className="post_form__container">
            <form className="post_form" onSubmit={props.submitReply}>
                <label htmlFor="noteContent">Note Content</label>
                <input id="noteContent" name="replyContent" type="text" value={props.replyContent} onChange={props.onChange}/>
                <input type="submit" name="submit" value="Submit Reply"/>
            </form>
            <button name="cancelEdit" className="cancel_button" onClick={() => props.cancelReply()}>x</button>
        </div>
    )
}

export default ReplyForm