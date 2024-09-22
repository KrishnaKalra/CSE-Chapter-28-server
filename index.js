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
image:String,
name:String,
id:String,
Location:String,
Instagram:String,
GitHub:String,
LinkedIn:String,
Description:String,
});
const User=mongoose.model("year2027",UserSchema);
app.get('/api/2027',async (req,res)=>{
    let datadb= await (User.find({}));
    console.log(datadb);
    res.json(datadb);
});
app.get('/api/2027/id',async (req,res)=>{
    const user_id=req.query.id;
    let datadb= await (User.find({id:user_id}));
    console.log(datadb);
    res.json(datadb);
});
app.listen(port,()=>{
    console.log("Listenin to port "+port);
})
app.get('/',(req,res)=>{
    res.send("Under Work");
});
app.post('/api/2027/add',async (req,res)=>{
    try{
    const Formname=req.body.name;
    const Formid=req.body.id;
    console.log(req.body);
    console.log(Formname);
    console.log(Formid);

    const newUser=new User({
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
app.post('/api/2027/profile',async(req,res)=>{
    try{
    const fid=req.body.id;
    const fimage=req.body.image;
    const flocation=req.body.location;
    const fdescription=req.body.description;
    const fGitHub=req.body.github;
    const fLinkedIn=req.body.linkedin;
    const fInstagram=req.body.instagram;
    console.log(req.body);
    await User.findOneAndUpdate({id:fid},{
        image:fimage,
        Location:flocation,
        Description:fdescription,
        GitHub:fGitHub,
        Instagram:fInstagram,
        LinkedIn:fLinkedIn,
    });
    res.json("Updated"); 
}
catch(err){
    console.error(err.message);
}
})