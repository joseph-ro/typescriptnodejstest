import express = require("express");

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("You are watching Home!! random value!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
