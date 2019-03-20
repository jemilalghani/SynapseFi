const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const userController = require("./userController");
const achController = require("./achController");
const path = require("path");
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

// User
app.post("/api/user/createuser", userController.createUsers);
app.post("/api/user/getuser", userController.getUser);
app.get("/api/user/getallusers", userController.getAllUser);
// ACH
app.post("/api/users/:userId/createnode", achController.createNode);
app.get("/api/users/:userId/getallnodes", achController.getAllNodes);
app.get("/api/users/:userId/getusertrans", achController.getUserTransactions);
app.post("/api/users/:userId/createtrans", achController.createTransaction);

//Static file declaration
app.use(express.static(path.join(__dirname, "client/build")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendfile(path.join((__dirname = "client/build/index.html")));
  });
}
//build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

//start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
