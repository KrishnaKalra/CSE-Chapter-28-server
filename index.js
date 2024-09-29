import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
const app=express();
import multer from "multer";
app.use(cors({
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.static("public"));
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true,parameterLimit:50000}));
app.use(express.json());
const storage=multer.memoryStorage();
const upload=multer({storage:storage});
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
image:Buffer,
contentType:String,
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
    let arr=[]
    datadb.map((data)=>{
        let NewObject={
            name:data.name,
            id:data.id
        };
        if(data.Description){
            NewObject.Description=data.Description;
        }
        if(data.GitHub){
            NewObject.GitHub=data.GitHub;
        }
        if(data.Instagram){
            NewObject.Instagram=data.Instagram;
        }
        if(data.LinkedIn){
            NewObject.LinkedIn=data.LinkedIn;
        }
        if(data.Location){
            NewObject.Location=data.Location;
        }

        if(data.image){
            NewObject.image=data.image.toString('base64');
            NewObject.contentType=data.contentType;
        }

        arr.push(NewObject);
    });
    return res.json(arr);
});
app.get('/api/2027/id',async (req,res)=>{
    try{
        const user_id=req.query.id;
        let datadb= await (User27.find({id:user_id}));
        let NewObject={
            name:datadb[0].name,
            id:datadb[0].id
        };
        if(datadb[0].Description){
            NewObject.Description=datadb[0].Description;
        }
        if(datadb[0].GitHub){
            NewObject.GitHub=datadb[0].GitHub;
        }
        if(datadb[0].Instagram){
            NewObject.Instagram=datadb[0].Instagram;
        }
        if(datadb[0].LinkedIn){
            NewObject.LinkedIn=datadb[0].LinkedIn;
        }
        if(datadb[0].Location){
            NewObject.Location=datadb[0].Location;
        }

        if(datadb[0].image){
            NewObject.image=datadb[0].image.toString('base64');
            NewObject.contentType=datadb[0].contentType;
        }

        res.json([NewObject]);
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
app.post('/api/2027/profile',upload.single("images"),async(req,res)=>{
    try{
        let NewObject={
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        
        const fid=req.body.id;
    
        if(req.file){
            const fcontentType=req.file.mimetype;
            const fimage=req.file.buffer;
        NewObject['image']=fimage;
        NewObject['contentType']=fcontentType;
        }
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
    let arr=[]
    datadb.map((data)=>{
        let NewObject={
            name:data.name,
            id:data.id
        };
        if(data.Description){
            NewObject.Description=data.Description;
        }
        if(data.GitHub){
            NewObject.GitHub=data.GitHub;
        }
        if(data.Instagram){
            NewObject.Instagram=data.Instagram;
        }
        if(data.LinkedIn){
            NewObject.LinkedIn=data.LinkedIn;
        }
        if(data.Location){
            NewObject.Location=data.Location;
        }

        if(data.image){
            NewObject.image=data.image.toString('base64');
            NewObject.contentType=data.contentType;
        }

        arr.push(NewObject);
    });
    return res.json(arr);
});
app.get('/api/2026/id',async (req,res)=>{
    try{
    const user_id=req.query.id;
    let datadb= await (User26.find({id:user_id}));
    let NewObject={
        name:datadb[0].name,
        id:datadb[0].id
    };
    if(datadb[0].Description){
        NewObject.Description=datadb[0].Description;
    }
    if(datadb[0].GitHub){
        NewObject.GitHub=datadb[0].GitHub;
    }
    if(datadb[0].Instagram){
        NewObject.Instagram=datadb[0].Instagram;
    }
    if(datadb[0].LinkedIn){
        NewObject.LinkedIn=datadb[0].LinkedIn;
    }
    if(datadb[0].Location){
        NewObject.Location=datadb[0].Location;
    }

    if(datadb[0].image){
        NewObject.image=datadb[0].image.toString('base64');
        NewObject.contentType=datadb[0].contentType;
    }

    res.json([NewObject]);
    }
    catch(err){
    console.error(err.message);
    }
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
        let NewObject={
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        
        const fid=req.body.id;
    
        if(req.file){
            const fcontentType=req.file.mimetype;
            const fimage=req.file.buffer;
        NewObject['image']=fimage;
        NewObject['contentType']=fcontentType;
        }
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
    let arr=[]
    datadb.map((data)=>{
        let NewObject={
            name:data.name,
            id:data.id
        };
        if(data.Description){
            NewObject.Description=data.Description;
        }
        if(data.GitHub){
            NewObject.GitHub=data.GitHub;
        }
        if(data.Instagram){
            NewObject.Instagram=data.Instagram;
        }
        if(data.LinkedIn){
            NewObject.LinkedIn=data.LinkedIn;
        }
        if(data.Location){
            NewObject.Location=data.Location;
        }

        if(data.image){
            NewObject.image=data.image.toString('base64');
            NewObject.contentType=data.contentType;
        }

        arr.push(NewObject);
    });
    return res.json(arr);
});
app.get('/api/2028/id',async (req,res)=>{
    try{
        const user_id=req.query.id;
        let datadb= await (User28.find({id:user_id}));
        let NewObject={
            name:datadb[0].name,
            id:datadb[0].id
        };
        if(datadb[0].Description){
            NewObject.Description=datadb[0].Description;
        }
        if(datadb[0].GitHub){
            NewObject.GitHub=datadb[0].GitHub;
        }
        if(datadb[0].Instagram){
            NewObject.Instagram=datadb[0].Instagram;
        }
        if(datadb[0].LinkedIn){
            NewObject.LinkedIn=datadb[0].LinkedIn;
        }
        if(datadb[0].Location){
            NewObject.Location=datadb[0].Location;
        }
    
        if(datadb[0].image){
            NewObject.image=datadb[0].image.toString('base64');
            NewObject.contentType=datadb[0].contentType;
        }
    
        res.json([NewObject]);
        }
        catch(err){
        console.error(err.message);
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
app.post('/api/2028/profile',async(req,res)=>{
    try{
        let NewObject={
            Location:req.body.location,
            Description:req.body.description,
            GitHub:req.body.github,
            Instagram:req.body.instagram,
            LinkedIn:req.body.linkedin,
        }
        
        const fid=req.body.id;
    
        if(req.file){
            const fcontentType=req.file.mimetype;
            const fimage=req.file.buffer;
        NewObject['image']=fimage;
        NewObject['contentType']=fcontentType;
        }
    console.log(NewObject);
    await User28.findOneAndUpdate({id:fid},NewObject);
    res.status(200).json("User Updated");
}
catch(err){
    console.error(err.message);
}
})
