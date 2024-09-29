import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';


    // Configuration
    cloudinary.config({ 
        cloud_name: 'dxxjhbo0i', 
        api_key: '638122342983789', 
        api_secret:'F5gLTCiDUqBZHKWirTsbR3WkhbM'// Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudinary=async (localFilePath,id)=>{
        try{
            console.log(process.env.CLOUDINARY_API_KEY);
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