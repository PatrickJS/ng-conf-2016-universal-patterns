import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';


// Angular 2 Universal
import 'angular2-universal/polyfills';
import {provide, expressEngine, ORIGIN_URL, enableProdMode} from 'angular2-universal';
enableProdMode();
// Application
import {App} from './app/app.component';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');


function ngApp(req, res) {

  let config = {
    directives: [ App ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'})
    ],
    preboot: false
  };

  res.render('index', config);
}

// Serve static files
app.use(express.static(ROOT, {index: false}));


// Routes with html5pushstate
app.use('/', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
