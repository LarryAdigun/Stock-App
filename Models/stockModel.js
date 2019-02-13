const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema ({
name: {
  type: String,
  required: [true, "Enter Name of Stock"]
},
 buyIn: {
   type: Number,
   required: [true,"Price For Stock"]
 },
 amount: {
   type: Number,
   amount: "How Many?"

}
});

const Stocks = mongoose.model("stocks",StockSchema)
module.exports = Stocks;
