const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

this.routes();
  }

  routes() {
    this.app.get("/", function (req, res) {
      res.json({msg: "Hola Mundo desde  GET"});
     });
     this.app.post("/", function (req, res) {
       res.status(201).json({msg: "Hola Mundo desde POST"});
      });
      this.app.put("/", function (req, res) {
        res.status(400).json({msg: "Hola Mundo desde PUT"});
       });
       this.app.delete("/", function (req, res) {
         res.status(500).json({msg: "Hola Mundo desde DELETE"});
        });
  }
  listen() {
    this.app.listen(this.port);
  }
}
module.exports = Server;
