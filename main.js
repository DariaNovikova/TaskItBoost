import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.jsx';
import DetailedView from './components/detailedView.jsx';
import List from './components/list.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={List} />
            <Route path="event/:eventId" component={DetailedView} />
        </Route>
    </Router>
    , document.getElementById('app')
);