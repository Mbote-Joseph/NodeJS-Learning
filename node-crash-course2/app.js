const express = require("express");

// express app

const app = express();

// registerr view engines
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<h1>Home Page</h1>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //res.send("<h1>About Page</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 Page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
