const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const next = require('next');
const admin = require('firebase-admin');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = express();
const handle = app.getRequestHandler();

console.log('Current environment is ', process.env.ENV);

(async () => {
  try {
    // Intialize the Firebase Admin SDK
    admin.initializeApp({
      credential: admin.credential.cert({
        "type": process.env.FB_ADMIN_TYPE,
        "project_id": process.env.FB_ADMIN_PROJECT_ID,
        "private_key_id": process.env.FB_ADMIN_PRIVATE_KEY_ID,
        "private_key": process.env.FB_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": process.env.FB_ADMIN_CLIENT_EMAIL,
        "client_id": process.env.FB_ADMIN_CLIENT_ID,
        "auth_uri": process.env.FB_ADMIN_AUTH_URI,
        "token_uri": process.env.FB_ADMIN_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FB_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FB_ADMIN_CLIENT_X509_CERT_URL
      }),
      databaseURL: process.env.FB_ADMIN_DATABASE_URL,
    });
    console.log('Firebase Admid SDK has been intialized');

    await app.prepare();

    server.get('/health-check', (_, res) => {
      res.sendStatus(200);
    });

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(compression());
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(morgan('combined'));

    server.get('/static/*', async (req, res) => {
      await handle(req, res);
    });

    server.get('/_next/*', async (req, res) => {
      await handle(req, res);
    });

    server.use('/api', require('./api-routes')());
    server.use(require('./routes')(app));

    server.get('*', async (req, res) => {
      await handle(req, res);
    });

    await server.listen(process.env.PORT, () => {
      console.log(
        `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
        }`
      );
    });
  } catch (err) {
    console.error(err);
    process.exit();
  }
})();
