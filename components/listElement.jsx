import React from 'react';
import { Link } from 'react-router';

export default class ListElement extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  };

  render() {
    return (
      <div className="list-element">
        <Link to={`/event/${this.props.eventId}`}>
          <h2>{this.props.name}</h2>
        </Link>
      </div>
    );
  }
}