import React from 'react';
import axios from 'axios';
import './detailedView.scss';

export default class DetailedView extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            subscribers_count: 0,
            created_at: ''
        }
    }

    componentDidMount() {
        axios.get(`http://api.itboost.org:88/app_dev.php/api/event/${this.props.params.eventId}`)
            .then(axiosResponse => axiosResponse.data.response.event)
            .then(response => this.setState({
                name: response.name,
                description: response.description,
                subscribers_count: response.subscribers_count,
                created_at: response.created_at
            }))

            .catch(error => console.log(error));
    }

    render() {
        var innerHtml = { __html: this.state.description };
        var dateString = new Date(this.state.created_at).toLocaleString('ru');
        return (
            <div className="details">
                <h1 className="header">{this.state.name}</h1>
                <div>
                    <span className="date">{dateString}</span>
                    <p className="subscribers"><strong>Подписалось: {this.state.subscribers_count} человек</strong></p>
                    <div className="description" dangerouslySetInnerHTML={innerHtml} ></div>
                </div>
            </div>
        );
    }
}        