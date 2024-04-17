const { connectMongo } = require("./connection.js");
const express = require("express");
const path = require("path");
connectMongo("mongodb://127.0.0.1:27017/Course_Project").then(()=>console.log("MongoDb Connected"));
const app= express();

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.get("/",(req,res)=>{
	return res.send("Hello From Server")

});
app.listen(8080,()=>console.log("Server Running at http://localhost:8080"))
