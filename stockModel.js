var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StockSchema = new Schema ({
"name": {
  type: String,
  required: "Enter New Stock"
},
 "buyIn": {
   type: Number,
   required: "Price For Stock"
 },
 "amount": {
   type: Number,
   amount: "How Many?"

}
});
