const fs = require("fs");

// reading files
fs.readFile("./docs/blogf.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");

// writing files
fs.writeFile("./docs/blog1.txt", "Hello Joseph Mbote", () => {
  console.log("file was Written");
});

// directories
if (!fs.existsSync("./asset")) {
  fs.mkdir("./asset", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./asset", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
} else {
  fs.writeFile("./docs/deleteme.txt", "The file to be deleted", () => {
    console.log("The deleteme file created");
  });
}
