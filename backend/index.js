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
      console.log(result);
      const first = Math.floor(Math.random() * result.length);
      let second = Math.floor(Math.random() * result.length);
      while (second == first) {
        second = Math.floor(Math.random() * result.length);
      }
      console.log(first);
      console.log(second);

      arr.push(result[first]);
      arr.push(result[second]);
      console.log(arr);
    })
    .then((result) => res.json(arr));
});

app.post("/api/choosing", (req, res) => {
  let id = req.body.id;
  let arr = [];
  Note.find({})
    .then((result) => {
      result.forEach((note) => {
        if (note.id != id) {
          arr.push(note);
        }
      });
    })
    .then((result) => {
      const first = Math.floor(Math.random() * arr.length);
      let arr2 = [];
      arr2.push(req.body);
      arr2.push(arr[first]);
      res.json(arr2);
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server running on port 3001");
});
