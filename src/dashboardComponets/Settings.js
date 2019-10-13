import React from 'react'

class Settings extends React.Component {
    state = {
        topics: []
    }

    addSubscription = (topic_obj) => {
        this.setState({
            topics: this.state.topics.filter(t => t.id !== topic_obj.id)
        })

        this.props.addSubscription(topic_obj.id)
    }

    deleteSubscription = (sub_obj) => {
        this.setState({
            topics: [
                ...this.state.topics,
                {
                    id: sub_obj.topic_id,
                    topic_type: sub_obj.topic_type
                }
            ]
        })
        this.props.deleteSubscription(sub_obj.id)
    }

    renderSubscriptions = () => {
        let subs = this.props.subscriptions

        return subs.length !== 0 
            ? subs.map(s => 
                <li key={s.id}><button onClick={ () => this.deleteSubscription(s)}>{s.topic_type}</button></li>
            ) 
            : <li>You don't have any subscriptions yet</li>
    }

    renderTopics = () => {
        let topics = this.state.topics
        return topics.length !== 0 
            ? topics.map(t => 
                <li key={t.id}><button onClick={ () => this.addSubscription(t) }>{t.topic_type}</button></li>
            ) 
            : <li>There are no more topics to add</li>
    }

    componentDidMount() {
        const config = {
            method: 'GET',
            headers: {
                'Authorization': this.props.token,
            }
        }
        fetch(`http://localhost:3000/unsubscribed/${this.props.currentUserId}`, config)
        .then(r => r.json())
        .then(d => {
            this.setState({
                topics: d
            })
        }
        )
    }

    render() {
        return(
            <section>
                <h1>Settings</h1>
                <h2>Your subscriptions:</h2>
                <ul>
                    { this.renderSubscriptions() }
                </ul>
                <h2>Add a new Subscription</h2>
                <ul>
                    { this.renderTopics() }
                </ul>
            </section>
        )
    }
}

export default Settings