import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    return(
        <nav className="navigation" aria-label="Main Navigation" >
            <ul role="menu">
                <li role="menuitem"><NavLink exact activeClassName="selected" to="/">Mailbox</NavLink></li>
                <li role="menuitem"><NavLink exact activeClassName="selected" to="/myposts">My Posts</NavLink></li>
                <li role="menuitem"><NavLink exact activeClassName="selected" to="/postings">Postings</NavLink></li>
                <li role="menuitem"><NavLink exact activeClassName="selected" to="/settings">Settings</NavLink></li>
                <li role="menuitem" aria-haspopup="true"onClick={props.logoutUser} style={{cursor: "pointer"}}><button>Logout</button></li>
            </ul>
        </nav>
    )
}
export default Navigation