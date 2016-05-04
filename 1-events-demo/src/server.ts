import 'angular2-universal/polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

// Angular 2 Universal
import {
  provide,
  expressEngine,
  ORIGIN_URL,
  enableProdMode
} from 'angular2-universal';

// Application
import {App} from './app/app.component';

enableProdMode();
const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
  res.render('index', {
    directives: [ App ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'})
    ],

    preboot: false


  });
}

// Serve static files
app.use(express.static(ROOT, {index: false}));


// Routes with html5pushstate
app.use('/', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
