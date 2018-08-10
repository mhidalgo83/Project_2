var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/provider", function(req, res) {
    db.provider.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/taker", function(req, res) {
    db.taker.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/provider", function(req, res) {
    db.provider.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/taker", function(req, res) {
    db.taker.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/provider/:id", function(req, res) {
    db.provider.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

    // Delete an example by id
    app.delete("/api/taker/:id", function(req, res) {
      db.taker.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });
};
