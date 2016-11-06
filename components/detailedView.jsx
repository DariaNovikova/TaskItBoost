import React from 'react';
import axios from 'axios';
import './detailedView.scss';
import { connect } from 'react-redux';
import { getEvent } from '../store/actions.jsx'

function mapStateToProps(props, ownProps) {
    debugger;
    var id = ownProps.params.eventId;
    var event = props.events.find(e => e.id == id);
    return {...event, id };
}

export class DetailedView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.event) {
            this.props.dispatch(getEvent(this.props.id));
        }
    }

    render() {
        var innerHtml = { __html: this.props.description };
        var dateString = new Date(this.props.created_at).toLocaleString('ru');
        return (
            <div className="details">
                <h1 className="header">{this.props.name}</h1>
                <div>
                    <span className="date">{dateString}</span>
                    <p className="subscribers"><strong>Подписалось: {this.props.subscribers_count}человек</strong></p>
                    <div className="description" dangerouslySetInnerHTML={innerHtml} ></div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(DetailedView);