import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import Routes from './routes'

import createHistory from 'history/lib/createBrowserHistory'
let history = createHistory()

var app = document.getElementById('app');

ReactDOM.render(<Router history={history} routes={Routes} />,
                app);
