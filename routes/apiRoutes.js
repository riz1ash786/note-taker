// require dependencies
const router = require("express").Router();
const store = require("../db/storeData");

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

//
