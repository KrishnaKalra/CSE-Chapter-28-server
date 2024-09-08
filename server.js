import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port=5173;
app.listen(port,()=>{
    console.log("Listenin to port "+port);
})
app.get('/',(req,res)=>{
    res.send("Hi HELLO");
})
