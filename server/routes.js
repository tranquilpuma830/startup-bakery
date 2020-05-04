const express = require('express');

module.exports = function(app) {
  const routes = express.Router();

  routes.get('/', (req, res) => {
    app.render(req, res, '/');
  });

  routes.get('/auction', (req, res) => {
    app.render(req, res, '/auction');
  });

  routes.get('/login', (req, res) => {
    app.render(req, res, '/login');
  });

  routes.get('/bakery', async (req, res) => {
    app.render(req, res, '/bakery');
  });

  routes.get('/ideas', async (req, res) => {
    app.render(req, res, '/ideas');
  });

  routes.get('/projects/:id', async (req, res) => {
    app.render(req, res, '/projects/[id]');
  });

  return routes;
};
