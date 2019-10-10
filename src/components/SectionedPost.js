import React from 'react'
import Note from './Note'

const SectionedNote = props => {
    return(
        <div>
            <h2>In reply to: <b>{props.notes[0].post_id}</b></h2>
            { props.notes.map( n => <Note note={n} key={n.id}/>) }
        </div>
    )
}

export default SectionedNote