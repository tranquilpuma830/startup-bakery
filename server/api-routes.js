const express = require('express');
const admin = require('firebase-admin');

const { getUserContext } = require('./middlewares/auth.js');

module.exports = function() {
  const routes = express.Router();

  routes.use(getUserContext);

  routes.get('/auth/user', async (req, res) => {
    const user  = res.locals.user;

    if (user) {
      return res.end(JSON.stringify({ user }));
    }

    res.status(401).send('UNAUTHORIZED REQUEST!');
  });

  routes.get('/health-check', async (req, res) => {
    res.send('OK');
  });

  routes.post('/auth/login', async (req, res) => {
    const idToken = req.body.idToken

    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    return admin.auth().createSessionCookie(idToken, { expiresIn })
    .then((sessionCookie) => {
      // Set cookie policy for session cookie.
      const options = { maxAge: expiresIn };
      res.cookie('session', sessionCookie, options);
      res.end(JSON.stringify({ status: 'success' }));
    })
    .catch((error) => {
      console.error(error);
      res.status(401).send('UNAUTHORIZED REQUEST!');
    });
  });

  routes.get('/auth/logout', async (req, res) => {
    const sessionCookie = req.cookies.session || '';

    res.clearCookie('session');

    return admin.auth().verifySessionCookie(sessionCookie)
      .then((decodedClaims) => {
        return admin.auth().revokeRefreshTokens(decodedClaims.sub);
      })
      .then(() => {
        res.redirect('/');
      })
      .catch(() => {
        res.redirect('/');
      });
  });

  return routes;
};
