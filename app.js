const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require ("ejs-mate");
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);//serve ejsmate
app.use(express.static(path.join(__dirname,"/public")));

app.listen(8080,()=>{
   console.log("server is listening on port 8080");
});
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

app.get("/",(req,res)=>{
   res.send("updated...");
});
//for test the db
app.get("/testListing", async (req,res)=>{
   let sampleListing= new Listing({
      
      title:"house",
      description:"Rent house in Delhi",
      price:2200,
 
   });
   await sampleListing.save();
   console.log("sample was saved");
   res.send("successfully saved the data");
});
//index route---
app.get("/listings",async(req,res)=>{
  const allListings= await Listing.find({});
  res.render("./listings/index.ejs",{allListings});

});
//new route--
app.get("/listings/new",(req,res)=>{
   res.render("listings/new.ejs");
})
//show route--

app.get("/listings/:id",async(req,res)=>{
   let {id}=req.params;
  const listing =await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
})
//create route--
app.post("/listings",async(req,res)=>{
   // let {title, description, image, price}=req.body;
   //or
   let listing=req.body.listing;
   const newListing=new Listing(listing);//create instance of object
   await newListing.save();
   res.redirect("/listings");

});
//edit route---
app.get("/listings/:id/edit",async(req,res)=>{
 let {id}=req.params;
 const listing= await Listing.findById(id);
 res.render("listings/edit.ejs",{listing});
});
//update route--
app.put("/listings/:id",async(req,res)=>{
   let{id}=req.params;
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect(`/listings/${id}`);
});
//DELETE ROUTE---
app.delete("/listings/:id",async(req,res)=>{
   let{id}=req.params;
   let deleteListing= await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
   res.redirect("/listings");
})