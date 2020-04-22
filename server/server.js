const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

//Get the users from the  fake API
app.get("/users", (req, res) => {
  axios.get("https://randomuser.me/api/?page=1&results=10").then((response) => {
    res.send(response.data);
  });
});

//Listening to the app
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
