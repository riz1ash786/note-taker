// required modules
const express = require("express");
const path = require("path");

const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// express server create at server port 3000
const app = express();
const PORT = process.env.PORT || 3000;

// parse date from string or array
app.use(express.urlencoded({ extended: true }));
// parse json data
app.use(express.json());
// use public folder
app.use(express.static("public"));

// routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// event listener
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});
