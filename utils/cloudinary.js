import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import env from 'dotenv';
env.config();
    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudinary=async (localFilePath,id)=>{
        try{
            if(!localFilePath)
                return null;
            console.log('check');
            const response=await cloudinary.uploader.upload(localFilePath,{
                public_id:id,
                resource_type:"auto"
            })
            console.log("File is uploaded on cloudinary "+response.url);
            return response;

        }
        catch(error){
            fs.unlinkSync(localFilePath);//remove the locally saved temporary file as the upload operation is unsuccessful
        }
    }

    export {uploadOnCloudinary};