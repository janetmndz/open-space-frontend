import React from 'react'

const Settings = (props) => {
    const renderSubscriptions = () => {
        let subs = props.subscriptions

        return subs.length !== 0 
            ? subs.map(s => 
                <li key={s.id}><button onClick={ () => props.deleteSubscription(s.id)}>{s.topic_type}</button></li>
            ) 
            : <li>You don't have any subscriptions yet</li>
    }

    const renderTopics = () => {
        let topics = props.topics

        return topics.length !== 0 
            ? topics.map(t => 
                <li key={t.id}><button onClick={ () => props.addSubscription(t.id) }>{t.topic_type}</button></li>
            ) 
            : <li>There are no more topics to add</li>
    }

    return(
        <section>
            <h1>Settings</h1>
            <h2>Your subscriptions:</h2>
            <ul>
                { renderSubscriptions() }
            </ul>
            <h2>Add a new Subscription</h2>
            <ul>
                { renderTopics() }
            </ul>
        </section>
    )
}

export default Settings