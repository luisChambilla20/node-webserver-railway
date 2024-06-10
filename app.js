const express = require("express");
require("dotenv").config();
const app = express();
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Luis Chambilla",
    curso: "Node Js",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Luis Chambilla",
    curso: "Node Js",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Luis Chambilla",
    curso: "Node Js",
  });
});
// app.get("/", (req, res) => {});
// app.get("/", (req, res) => {});

app.listen(process.env.PORT);
