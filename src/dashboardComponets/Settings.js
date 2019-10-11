import React from 'react'

const Settings = (props) => {
    const renderSubscriptions = () => {
        let subs = props.subscriptions

        return subs.length !== 0 
            ? subs.map(s => 
                <li key={s.id}><button onClick={() => props.deleteSubscription(s.id)}>{s.topic_type}</button></li>
            ) 
            : <li>You don't have any subscriptions yet</li>
    }
    return(
        <section>
            <h1>Settings</h1>
            <h2>Your subscriptions:</h2>
            <ul>
                { renderSubscriptions() }
            </ul>
        </section>
    )
}

export default Settings