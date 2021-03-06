// require dependencies
const router = require("express").Router();
const store = require("../db/store");

// GET request
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST request
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete request
router.delete("/notes/:id", (req, res) => {
  store
    .clearNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
