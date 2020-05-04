const admin = require('firebase-admin');

const isAuthenticated = async (req, res, next) => {
  const sessionCookie = req.cookies.session || '';
  const redirectUrl = decodeURIComponent(req.originalUrl);

  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
    console.log(decodedClaims);
    next();
  } catch (err) {
    res.redirect(`/login?redirectUrl=${redirectUrl}`);
  }
};

const getUserContext = async (req, res, next) => {
  const sessionCookie = req.cookies.session || '';

  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
    if (decodedClaims) {
      res.locals.user = decodedClaims;
    }
  } catch (err) {
    console.error(err);
  }
  next();
};

module.exports = {
  isAuthenticated,
  getUserContext,
};
