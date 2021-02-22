const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const Blog = require("./models/blogs");
const { result } = require("lodash");
// express app
const blogRoutes = require("./Routes/blogRoutes");
const app = express();

const dbURI =
  "mongodb+srv://joseph:sct211%2D0011%2F2018@nodejs.3x70s.mongodb.net/NodeJS?retryWrites=true&w=majority";
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => consolelog("connected to db"))
//   .catch((err) =>console.log(err)
//   )

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => app.listen(5000))
  .catch((err) => console.log(err));

// registerr view engines
app.set("view engine", "ejs");

// listen for request
// app.listen(5000);
// Middleware & Static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Middleware

// app.use((req, res, next) => {
//   console.log("new request made :");
//   console.log("host :", req.hostname);
//   console.log("path : ", req.path);
//   console.log("method :", req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the next middleware");

//   next();
// });

// Third party Middleware
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog",
//     body: "More about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById('6033858609c6b27ee7174f2c')
//   .then((result)=>{
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
  //res.send("<h1>Home Page</h1>");
  // const blogs = [
  //   {
  //     title: " Yoshi finds eggs",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: " Mario finds stars",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: " How to defeat browse",
  //     snippet: "lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // res.render("index", {
  //   title: "Home",
  //   blogs: blogs,
  // });
});

app.get("/about", (req, res) => {
  //res.send("<h1>About Page</h1>");
  res.render("about", { title: "About" });
});

// redirects
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
