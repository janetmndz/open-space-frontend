import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return(
        <nav className="navigation">
            <ul>
                <Link to="/"><li>MailBox</li></Link>
                <Link to="/myposts"><li>My Posts</li></Link>
                <Link to="/postings"><li>Postings</li></Link>
                <Link to="/settings"><li>Settings</li></Link>
                <li onClick={props.logoutUser} style={{cursor: "pointer"}}>Logout</li>
            </ul>
        </nav>
    )
}
export default Navigation