const express = require('express');

module.exports = function() {
  const routes = express.Router();

  routes.get('/health-check', (req, res) => {
    res.send('OK');
  });

  return routes;
};
