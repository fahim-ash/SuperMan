import sharp from 'sharp';
import workerpool from 'workerpool';
import {promises as fs} from 'fs';

const resizedImage = async (fileBuffer)=>{
    try{
        // const fileBuffer = (await fs.readFile(filepath)).buffer;
        return await sharp(fileBuffer)
            .resize(200, 200) // this size will be dynamic
            .toBuffer(); 
    }catch (error){
        //throw new Error(`Image resizing error: ${error.message}`);
    }
};

workerpool.worker({
    resizedImage
});
