import React from 'react';
import { match, RoutingContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import Express from 'express';
import http from 'http';
import Routes from './src/routes';
import Webpack from 'webpack';
import WebpackMiddleware from 'webpack-dev-middleware';
import DefaultConfig from './webpack/default.config.js';
import DevConfig from './webpack/development.config.js';

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

app.use((req, res) => {
  match({ routes: Routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.render('index', {
        isDevelopment: isDevelopment,
        app: ReactDOMServer.renderToString(<RoutingContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not found');
    }
  })
});

http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

