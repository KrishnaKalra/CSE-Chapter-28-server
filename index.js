import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
const app=express();
app.use(cors())
app.use(express.static("public"));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
const port=3000;
const password='qe2D!nSmLqCnEPS';
mongoose.connect('mongodb+srv://KrishnaKalra:'+password+'@cluster0.gynsm.mongodb.net/Batches');
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
    console.log(datadb);
    res.json(datadb);
});
app.get('/api/2027/id',async (req,res)=>{
    const user_id=req.query.id;
    let datadb= await (User27.find({id:user_id}));
    console.log(datadb);
    res.json(datadb);
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
    await User27.findOneAndUpdate({id:fid},{
        image:fimage,
        Location:flocation,
        Description:fdescription,
        GitHub:fGitHub,
        Instagram:fInstagram,
        LinkedIn:fLinkedIn,
    });
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})




const User26=mongoose.model("year2026",UserSchema);
app.get('/api/2026',async (req,res)=>{
    let datadb= await (User26.find({}).sort({id:1}));
    console.log(datadb);
    res.json(datadb);
});
app.get('/api/2026/id',async (req,res)=>{
    const user_id=req.query.id;
    let datadb= await (User26.find({id:user_id}));
    console.log(datadb);
    res.json(datadb);
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
app.post('/api/2026/profile',async(req,res)=>{
    try{
    const fid=req.body.id;
    const fimage=req.body.image;
    const flocation=req.body.location;
    const fdescription=req.body.description;
    const fGitHub=req.body.github;
    const fLinkedIn=req.body.linkedin;
    const fInstagram=req.body.instagram;
    console.log(req.body);
    await User26.findOneAndUpdate({id:fid},{
        image:fimage,
        Location:flocation,
        Description:fdescription,
        GitHub:fGitHub,
        Instagram:fInstagram,
        LinkedIn:fLinkedIn,
    });
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})








const User28=mongoose.model("year2028",UserSchema);
app.get('/api/2028',async (req,res)=>{
    let datadb= await (User28.find({}).sort({id:1}));
    console.log(datadb);
    res.json(datadb);
});
app.get('/api/2028/id',async (req,res)=>{
    const user_id=req.query.id;
    let datadb= await (User28.find({id:user_id}));
    console.log(datadb);
    res.json(datadb);
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
app.post('/api/2028/profile',async(req,res)=>{
    try{
    const fid=req.body.id;
    const fimage=req.body.image;
    const flocation=req.body.location;
    const fdescription=req.body.description;
    const fGitHub=req.body.github;
    const fLinkedIn=req.body.linkedin;
    const fInstagram=req.body.instagram;
    console.log(req.body);
    await User28.findOneAndUpdate({id:fid},{
        image:fimage,
        Location:flocation,
        Description:fdescription,
        GitHub:fGitHub,
        Instagram:fInstagram,
        LinkedIn:fLinkedIn,
    });
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})