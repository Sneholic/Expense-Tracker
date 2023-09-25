// const mongoose=require("mongoose")
// const transactionschema=new mongoose.Schema({
//     text:{
//         type: String,
//         trim:true,
//         required:[true,'please add some text']


//     },
//     amount:{
//         type:Number,
//         required:[true,'please add a positive or negative number']

//     },
//     createdAT:{
//         type:Date,
//         default:Date.now


//     }
// })
// module.exports=mongoose.model("Transaction",transactionschema)


const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
