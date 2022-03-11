// required modules
const express = require("express");
const path = require("path");

// express server create at server port 3000
const app = express();
const PORT = process.env.PORT || 3000;

// parse date from string or array
app.use(express.urlencoded({ extended: true }));

// parse json data
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// event listener
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});
