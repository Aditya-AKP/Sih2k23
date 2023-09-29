require("dotenv").config();
// basic syntax for dotenv module
// DotEnv is a lightweight npm package that
// automatically loads environment variables
// from a . env file into the process. env object
  
// Express is a minimal and flexible Node.js web 
// application framework that provides
//a robust set of features for web and mobile applications
  
const express = require("express");
  
// Mongoose is an Object Data Modeling (ODM) library 
// for MongoDB database and Node.js.
const mongoose = require("mongoose");
  
// creating nodejs app
const app = express();
  
// app to use body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
// app set to template engine called ejs
app.set("view engine", "ejs");
  
// url for mongodb cluster
const url = process.env.DB_URL;
  
// connecting to mongodb cluster
mongoose.connect(url);
  
// schema for storing the todo's in DB
const itemsSchema = {
  toDoItem: String,
};
  
// creating Collection in DB
const Item = mongoose.model("toDoItems", itemsSchema);
  
// app.get("/", function (req, res) {
//   // find all the inserted Items in DB
//   Item.find({}, (err, toDoItems) => {
//     if (!err) {
//       res.render("index", {
//         toDoItems: toDoItems,
//       });
//     }
//   });
// });

app.get("/", async function (req, res) {
  // find all the inserted Items in DB
  const toDoItems = await Item.find({});
  res.render("index", {
    toDoItems: toDoItems,
  });
});

// app.post("/", function (req, res) {
//   //   store the toDo we're getting in variable toDo
//   const toDo = req.body.toDo;
  
//   const toDoItem = new Item({ toDoItem: toDo });
  
//   //   store the toDo item in the DB
//   toDoItem.save(() => {
//     // redirect to home page
//     res.redirect("/");
//   });
// });

app.post("/", async function (req, res) {
  //   store the toDo we're getting in variable toDo
  const toDo = req.body.toDo;
  
  const toDoItem = new Item({ toDoItem: toDo });
  
  //   store the toDo item in the DB
  await toDoItem.save();
  
  // redirect to home page
  res.redirect("/");
});
  
//app.listen(process.env.PORT || 3000);
