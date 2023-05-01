const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("dragon is coming");
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (parseInt(id) === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
    console.log(id);
  }
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Dragon API is running on port:${port}`);
});
