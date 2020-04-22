const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

//Listening to the app
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
