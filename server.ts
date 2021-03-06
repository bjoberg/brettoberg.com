// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 5000;
const DIST_FOLDER = join(process.cwd(), 'dist');
const NODE_ENV = process.env.NODE_ENV || 'development';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// Route to https
function requireHttps(req, res, next) {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && NODE_ENV !== 'development') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

// Compress all files
app.use(compression());

// Always serve the application over https
app.use(requireHttps);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// Sitemap.xml file
app.get('/sitemap.xml', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'sitemap.xml'), { req });
});

// Robots.txt file
app.get('/robots.txt', function(req, res) {
  res.render(join(DIST_FOLDER, 'browser', 'robots.txt'), { req });
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render(join(DIST_FOLDER, 'browser', 'index.html'), { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
