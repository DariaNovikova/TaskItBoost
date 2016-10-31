import React from 'react';
import axios from 'axios';
import ListElement from './listElement.jsx';

export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('http://api.itboost.org:88/app_dev.php/api/events')
            .then(axiosResponse => axiosResponse.data.response)
            .then(response => this.setState({
                items: response.items
            }))

            .catch(error => console.log(error));
    }

    render() {

        var elements = this.state.items.map(el =>
            <ListElement name={el.name}
                date={el.created_at}
                key={el.id}
                eventId={el.id} />)

        return (
            <ul>
                {elements}
            </ul>
        );
    }
}
