const express = require("express");
const categories = require("./data/categories.json");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("dragon is coming");
});
app.use(cors());
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Dragon API is running on port:${port}`);
});
