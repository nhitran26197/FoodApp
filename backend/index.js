const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
const images = [
  {
    id: 1,
    name: "pizza",
    url: "https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/800pizza.jpg",
  },
  {
    id: 2,
    name: "noodle",
    url: "https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png",
  },
  {
    id: 3,
    name: "fried rice",
    url: "https://static.toiimg.com/photo/84895387.cms",
  },
];

app.get("/api/opening", (req, res) => {
  const first = Math.floor(Math.random() * 3);
  let second = Math.floor(Math.random() * 3);
  while (second == first) {
    second = Math.floor(Math.random() * 3);
  }
  let arr = [];
  arr.push(images[first]);
  arr.push(images[second]);
  res.json(arr);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
