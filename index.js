const { json } = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const app = express();

const port = 3000;
app.use(express(json()));

app.set("view engine", "ejs");
app.set("views", "./pages");

app.use("/assets", express.static("./assets"));
// renders the home page
app.get("/", (req, res) => {
  res.render("home");
});

// renders the about page
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log("app started");
});
