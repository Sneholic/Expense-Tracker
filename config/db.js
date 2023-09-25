// const mongoose=require('mongoose');
// const connectDB=async()=>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI,{

       
//         useNewUrlParser: true,
        
//         useUnifiedTopology: true
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);


//     }catch(err)
//     {
//         console.log(`error ${err.message}`.red)
//         process.exit(1)
//     }
// }
// module.exports=connectDB;

const mongoose = require('mongoose');
// var mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:5000/mydbnp";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;