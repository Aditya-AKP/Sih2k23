const path = require("path");
const express = require("express");
const serveStatic = require("serve-static");
const app = express();
const port = 3000;

app.use(serveStatic(__dirname + "/public"));
//Login Page Router
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "l.html"));
});
//Register Page Router
app.get("/register", (req, res) => {
  res.send("Register Page");
});
//Api Key Router
app.get("/apiKey", (req, res) => {
  res.send("Api Page");
});
//DropOut Router
app.get("/dropOut", (req, res) => {
  res.send("dropOut Analysis");
});

//DashBoard Router
app.get("/dashBoard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashBoard.html"));
});

app.get("/studentRegister", (req, res) => {
  res.sendFile(path.join(__dirname, "./htmlFiles/studentRegistration.html"));
});

app.get("/studentUpdation", (req, res) => {
  res.sendFile(path.join(__dirname, "./htmlFiles/studentUpdate.html"));
});
app.get("/studentDetails", (req, res) => {
  res.sendFile(path.join(__dirname, "./htmlFiles/studentDetails.html"));
});
//Port Listen
app.listen(port, () => {
  console.log(`port run successfully on port:${port}`);
});
