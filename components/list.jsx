import React from 'react';
import ListElement from './listElement.jsx';
import './list.scss';
import { connect } from 'react-redux';
import { getAllEvents } from '../store/actions.jsx'

function mapStateToProps(state, ownProps) {
    return {
        items: state.events
    }
}

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getAllEvents());
    }

    render() {
        var elements = this.props.items.map(el =>
            <ListElement name={el.name}
                date={el.created_at}
                key={el.id}
                eventId={el.id} />)
        return (
            <div className="list">
                <h1 className="header">Список мероприятий:</h1>
                {elements}
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
