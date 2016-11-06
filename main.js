import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/app.jsx';
import DetailedView from './components/detailedView.jsx';
import List from './components/list.jsx';
import { Provider } from 'react-redux';
import initializeStore from './store/initializeStore.jsx';

var store = initializeStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={List} />
                <Route path="event/:eventId" component={DetailedView} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app')
);