// require dependencies
const router = require("express").Router();
const path = require("path");

//GET request returns notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//defaults to homepage if no matching route found
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
