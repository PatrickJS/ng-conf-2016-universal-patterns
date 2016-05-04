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
  res.render('index', {
    directives: [ App ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'})
    ],
    preboot: true

    // preboot: {
    //   start:    true,
    //   appRoot:  'app',         // selector for root element
    //   replay:   'rerender',    // rerender replay strategy
    //   buffer:   true,          // client app will write to hidden div until bootstrap complete
    //   debug:    false,
    //   uglify:   false,
    //   presets:  ['keyPress', 'buttonPress', 'focus']
    // }
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
