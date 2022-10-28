const express = require("express");
const data = require("./data.json");

const app = express();

const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const templateData = {
    phone: data,
  };
  res.render("index", templateData);
});

app.get("/detail", function (req, res) {
  //   const templateData = {
  //     people: data,
  //   };

  const index = req.query.index;

  const templateData = {
    phone: data[index],
  };

  //   const cellName = {
  //     brand: Apple,
  //   };

  console.log(index);

  res.render("detail", templateData);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
