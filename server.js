import React from 'react';
import { RoutingContext, Router } from 'react-router';
import { configureStore } from './src/Store';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import http from 'http';
import Webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import DefaultConfig from './webpack/default.config.js';
import DevConfig from './webpack/development.config.js';
import createHistory from 'history/lib/createMemoryHistory';
import SubmissionsListReducer from './src/reducers/SubmissionsListReducer';

let app = Express();
let port = process.env.PORT || DefaultConfig.Port;
const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = process.env.NODE_ENV === 'production';

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.use(Express.static(DefaultConfig.Dist));

if (isDevelopment) {
  const compiler = Webpack(DevConfig);
  app.use(WebpackMiddleware(compiler, {
    publicPath: DevConfig.output.publicPath,
    noInfo: true
  }));
}

if (isProduction) {
  app.set('views', DefaultConfig.Dist);
}

app.use((request, response) => {
  const initialState = {};
  const store = configureStore(initialState, createHistory,
                               reduxReactRouter);

  store.dispatch(match(request.originalUrl,
                       (error, redirectLocation, routerState) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (routerState) {
      Promise.all(fetchAll(store, routerState)).then(() => {
        try {
          const finalState = store.getState();
          render(response, store, finalState);
        } catch(e) {
          response.status(500).send("Something went wrong");
        }
      }).catch((response) => {
        console.log(response);
        response.status(500).send("Something went wrong");
      });
    } else {
      response.status(404).send('Not found');
    }
  }));
});

function fetchAll(store, routerState) {
  return routerState.components.map((componentClass) => {
    if (componentClass.fetchData) {
      return componentClass.fetchData(store.dispatch, routerState.params)
    }
  });
}

function render(response, store, finalState) {
  response.render('index', {
    isDevelopment: isDevelopment,
    app: ReactDOMServer.renderToString(
      <Provider store={store}>
        <ReduxRouter/>
      </Provider>
    ),
    initialState: JSON.stringify(finalState)
  });
}

http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

