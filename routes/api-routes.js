const Note = require('../models/Note');

module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    Note.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/notes', function (req, res) {
    Note.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.put('/api/notes/:id', function (req, res) {
    Note.findOneAndUpdate({ _id: req.body._id }, { completed: req.body.completed })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/api/notes/:id', function (req, res) {
    Note.findOneAndDelete(req.params.id)
      .then(data => res.json({ success: true }))
      .catch(err => res.json(err))
  })
}