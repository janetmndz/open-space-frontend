import React from 'react'
import SectionedPost from '../components/SectionedPost'

const Mailbox = (props) => {
    const sortedByPost = props.posts.map( p => props.recieved_notes.filter( rn => rn.post_id === p.id))
    return(
        <div className="mailbox__container">
            <h1>This is your Mailbox</h1>
            <div className="notes__container" style={{display: "flex", flexDirection: "column"}}>
                <div className="notes__section">
                    { sortedByPost.map(sp => <SectionedPost notes={sp} key={sp[0].post_id}/>) }
                </div>
            </div>
        </div>
    )
}

export default Mailbox