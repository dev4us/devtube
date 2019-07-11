const express = require("express");
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`EXPRESS :: Listening on ${PORT} Port`);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});
