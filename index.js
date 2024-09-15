import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
const app=express();
app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
const port=3000;
const password='qe2D!nSmLqCnEPS';
mongoose.connect('mongodb+srv://KrishnaKalra:'+password+'@cluster0.gynsm.mongodb.net/Batches');
const db=mongoose.connection;
db.once('open',()=>{ 
    console.log("mongoDB connected");
});
 
const UserSchema=new mongoose.Schema({   
_id:String,
name:String,
id:String,
Location:String,
Description:String
});
const User=mongoose.model("year2027",UserSchema);
app.get('/api/2027',async (req,res)=>{
    let datadb= await (User.find({}));
    console.log(datadb);
    res.json(datadb);
});
app.listen(port,()=>{
    console.log("Listenin to port "+port);
})
app.get('/',(req,res)=>{
    res.send("Under Work");
});
