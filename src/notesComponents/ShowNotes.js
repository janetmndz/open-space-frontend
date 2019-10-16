import React from 'react'
import Note from './Note'

const ShowNotes = (props) => {
    const renderNotes = () => {
        return props.notes.map(n => <Note note={n} key={n.id}/>)
    }
    console.log(props.notes)
    return(
        <div className="show__container">
            <div className="notes__container">
                {renderNotes()}
            </div>
            <button className="cancel_button" onClick={props.cancelShow}>x</button>
        </div>
    )
}
export default ShowNotes