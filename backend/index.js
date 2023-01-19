require("dotenv").config();
const Note = require("./note");
const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/opening", (req, res) => {
  let arr = [];
  Note.find({})
    .then((result) => {
      //console.log(result);
      const first = Math.floor(Math.random() * result.length);
      let second = Math.floor(Math.random() * result.length);
      while (second == first) {
        second = Math.floor(Math.random() * result.length);
      }

      arr.push(result[first]);
      arr.push(result[second]);
      //console.log(arr);
    })
    .then((result) => res.json(arr));
});

app.post("/api/choosing/left", (req, res) => {
  //let obj = JSON.parse(req.body);
  let obj = req.body;
  console.log(obj);
  console.log("jellllll");
  let left = obj[0];
  let idLeft = obj[0].id;
  let idRight = obj[1].id;

  Note.find({})
    .then((result) => {
      let index = 0;
      let data = [];
      while (result[index].id == idLeft || result[index].id == idRight) {
        index = Math.floor(Math.random() * result.length);
      }
      data.push(left);
      data.push(result[index]);
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/choosing/right", (req, res) => {
  let obj = req.body;
  let right = obj[1];
  let idLeft = obj[0].id;
  let idRight = obj[1].id;

  Note.find({})
    .then((result) => {
      let index = 0;
      let data = [];
      while (result[index].id == idLeft || result[index].id == idRight) {
        index = Math.floor(Math.random() * result.length);
      }
      data.push(result[index]);
      data.push(right);
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/testing", (req, res) => {
  console.log(req.body);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
