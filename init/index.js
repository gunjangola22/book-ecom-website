const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL= "mongodb://127.0.0.1:27017/ecom";
main()
.then(()=>{
   console.log("connected");
})
.catch(err=>{
   console.log(err);
}); 

async function main(){ //func for calling db url
   await mongoose.connect(MONGO_URL);
}
//delete previous sample data and insert new data
const initDB=async()=>{
   await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
   console.log("data was initalised");
}
initDB();
