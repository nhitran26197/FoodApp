require("dotenv").config();
const mongoose = require("mongoose");
const Note = require("./note");
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

const note = new Note({
  name: process.argv[2],
  url: process.argv[3],
  score: process.argv[4],
});

note
  .save()
  .then(() => {
    console.log("note saved!");
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
