const express = require('express');
const router = express.Router();
const Stocks = require("../models/stockModels");

router.get("/stocks", function(req,res) {
  res.send({type: "GET"})

});

router.post("/stocks", function(req,res) {
Stocks.create(req.body).then(function(stocks){
  res.send(stocks);
});

});

router.put("/stocks/:id", function(req,res) {
  req.body;
res.send({type: "PUT"})
});

router.delete("/stocks/:id", function(req,res) {

});
module.exports = router;
