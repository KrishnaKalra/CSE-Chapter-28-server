import dotenv from 'dotenv';
dotenv.config();   
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import { uploadOnCloudinary } from "./utils/cloudinary.js";
import {upload } from "./middleware/multer.middleware.js";
import getDataUri from "./utils/dataUri.js";


const app=express();
app.use(cors({
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.static("public"));
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true,parameterLimit:50000}));
app.use(express.json());
const port=3000;


console.log("Connecting to:", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

const db=mongoose.connection;
db.once('open',()=>{ 
    console.log("mongoDB connected"); 
});
app.listen(port,()=>{
    console.log("Listenin to port "+port);
})
app.get('/',(req,res)=>{
    res.send("Under Work");
});
const UserSchema=new mongoose.Schema({   
image:String,
name:String,
id:String,
Location:String,
Instagram:String,
GitHub:String,
LinkedIn:String,
Description:String,
});
const User27=mongoose.model("year2027",UserSchema);
app.get('/api/2027',async (req,res)=>{
    let datadb= await (User27.find({}).sort({id:1}));
    return res.json(datadb);
});
app.get('/api/2027/id',async (req,res)=>{
    try{
        const user_id=req.query.id;
        let datadb= await (User27.find({id:user_id}));
        
        res.json(datadb);
    }
    catch(err){
        console.error(err);
    }
    
});

app.post('/api/2027/add',async (req,res)=>{
    try{
    const Formname=req.query.name;
    const Formid=req.query.id;
    console.log(req.query);
    console.log(Formname);
    console.log(Formid);

    const newUser=new User27({
        name:Formname,
        id:Formid
    });
    await newUser.save();
    res.json('User added!');
    }
    catch(err){
        console.error(err.message);
    }
});
app.post('/api/2027/profile',upload.single('images'),async(req,res)=>{
    try{
        let result;
        if(req.file){
            const fileUri=getDataUri(req.file);
            result= await uploadOnCloudinary(fileUri,req.body.id);
        }
        console.log(result);
        let NewObject={
            name: req.body.name, 
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        if(req.file)
            NewObject['image']=result.url;
        let fid=req.body.id;
        
    console.log(NewObject);
    await User27.findOneAndUpdate({id:fid},NewObject);
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})




const User26=mongoose.model("year2026",UserSchema);
app.get('/api/2026',async (req,res)=>{
    let datadb= await (User26.find({}).sort({id:1}));
    return res.json(datadb);
});
app.post('/api/2026/add',async (req,res)=>{
    try{
    const Formname=req.query.name;
    const Formid=req.query.id;
    console.log(req.query);
    console.log(Formname);
    console.log(Formid);

    const newUser=new User26({
        name:Formname,
        id:Formid
    });
    await newUser.save();
    res.json('User added!');
    }
    catch(err){
        console.error(err.message);
    }
});
app.get('/api/2026/id',async (req,res)=>{
    try{
        const user_id=req.query.id;
        let datadb= await (User26.find({id:user_id}));
        
        res.json(datadb);
    }
    catch(err){
        console.error(err);
    }
});
app.post('/api/2026/profile',upload.single('images'),async(req,res)=>{
    try{
        let result;
        if(req.file){
        const fileUri=getDataUri(req.file);
        result= await uploadOnCloudinary(fileUri,req.body.id);
        }
        //console.log(result.url);
        let NewObject={
            name: req.body.name, 
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        if(req.file)
            NewObject['image']=result.url;
        let fid=req.body.id;
        
    console.log(NewObject);
    await User26.findOneAndUpdate({id:fid},NewObject);
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
});








const User28=mongoose.model("year2028",UserSchema);
app.get('/api/2028',async (req,res)=>{
    let datadb= await (User28.find({}).sort({id:1}));
    return res.json(datadb);
});
app.get('/api/2028/id',async (req,res)=>{
    try{
        const user_id=req.query.id;
        let datadb= await (User28.find({id:user_id}));
        
        res.json(datadb);
    }
    catch(err){
        console.error(err);
    }
});

app.post('/api/2028/add',async (req,res)=>{
    try{
    const Formname=req.query.name;
    const Formid=req.query.id;
    console.log(req.query);
    console.log(Formname);
    console.log(Formid);

    const newUser=new User28({
        name:Formname,
        id:Formid
    });
    await newUser.save();
    res.json('User added!');
    }
    catch(err){
        console.error(err.message);
    }
});
app.post('/api/2028/profile',upload.single('images'),async(req,res)=>{
    try{
        let result;
        if(req.file){const fileUri=getDataUri(req.file);
            result= await uploadOnCloudinary(fileUri,req.body.id);}
        //console.log(result.url);
        let NewObject={
            name: req.body.name, 
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        if(req.file)
            NewObject['image']=result.url;
        let fid=req.body.id;
        
    console.log(NewObject);
    await User28.findOneAndUpdate({id:fid},NewObject);
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})





const User29 = mongoose.model("year2029", UserSchema);


app.get('/api/2029', async (req, res) => {
  let datadb = await User29.find({}).sort({id:1});
  return res.json(datadb);
});


app.get('/api/2029/id', async (req, res) => {
  try {
    const user_id = req.query.id;
    let datadb = await User29.find({id:user_id});
    res.json(datadb);
  } catch(err) {
    console.error(err);
  }
});


app.post('/api/2029/add', async (req, res) => {
  try {
    const Formname = req.query.name;
    const Formid = req.query.id;
    const newUser = new User29({ name:Formname, id:Formid });
    await newUser.save();
    res.json('User added!');
  } catch(err) {
    console.error(err.message);
  }
});


app.post('/api/2029/profile', upload.single('images'), async (req,res)=>{
  try {
    let result;
    if(req.file){
      const fileUri = getDataUri(req.file);
      result = await uploadOnCloudinary(fileUri, req.body.id);
    }
    let NewObject = {
      name: req.body.name, 
      Location:req.body.location,
      Description:req.body.description,
      GitHub:req.body.github,
      Instagram:req.body.instagram,
      LinkedIn:req.body.linkedin,
    };
    if(req.file) NewObject['image'] = result.url;
    let fid = req.body.id;
    await User29.findOneAndUpdate({id:fid},NewObject);
    res.status(200).json("User Updated");
  } catch(err){
    console.error(err.message);
  }
});
