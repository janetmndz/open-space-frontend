import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return(
        <nav className="navigation" aria-label="Main Navigation" >
            <ul role="menu">
                <li role="menuitem"><Link to="/">Mailbox</Link></li>
                <li role="menuitem"><Link to="/myposts">My Posts</Link></li>
                <li role="menuitem"><Link to="/postings">Postings</Link></li>
                <li role="menuitem"><Link to="/settings">Settings</Link></li>
                <li role="menuitem" aria-haspopup="true"onClick={props.logoutUser} style={{cursor: "pointer"}}><button>Logout</button></li>
            </ul>
        </nav>
    )
}
export default Navigation