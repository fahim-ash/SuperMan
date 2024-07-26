
import { promises as fs} from 'fs';
import path from 'path';
import workerpool from 'workerpool';
import sharp from 'sharp';

// worker pool 
const pool = workerpool.pool(path.resolve('./script.js'), {
    maxWorkers: 6, // configurable workers
    workerType: 'thread'
});
  

// // without pool
// const resizedImage = async (fileBuffer)=>{
//     try{
//     //    const fileBuffer = (await fs.readFile(filePath)).buffer;
        
//         return await sharp(fileBuffer)
//             .resize(200, 200) // this size will be dynamic
//             .toBuffer(); 
//     }catch (error){
//         // throw new Error(`Image resizing error: ${error.message}`);
//     }
// };

// get worker from pool
function resizeImages (files){
    return Promise.all(files.map(async file =>{
        try{
            // const resizedBuffer = await resizedImage(file);
            const resizedBuffer = await pool.exec('resizedImage', [file]).timeout(500);
            return resizedBuffer;
        }catch (err){
            console.error('Worker pool error', err);
            throw new Error('Failed to resize image');
        }
    }));
};



// main function 
async function resizeImage(dir){
    try{
        // const dir = '../uploads'; // get files from uploads folder
        const images_path = await fs.opendir(dir);
        let files = [];
        let count = 0;
        for await(let i of images_path){
            //if (i.name.substring(i.name.length-3, i.name.length) == 'jpg'){
                let pth = i.parentPath+"/"+i.name;
                let buff = await (fs.readFile(pth)).buffer;
                files.push(buff);
                // fs.rename(i.parentPath+"/"+i.name, `${i.parentPath}/${count}.jpg`);
                
            // }else{
            //     fs.rm(i.parentPath+"/"+i.name);
            // }
            // count ++;
        }

        const resizedImage = await resizeImages(files);
        //let downloads = '../downloads/new_image.jpg';
    }catch(error){
        console.log(error);    
    }
};
async function main(){
    //let time1 = new Date();
    console.log(Date('number'))
    await resizeImage('../uploads');
    await resizeImage('../downloads');
    await resizeImage('../sample');
    await resizeImage('../sample2');
    console.log(Date());
    // let time2 = new Date();
    // console.log(time2.getUTCMinutes(), time2.getUTCSeconds(), time2.getUTCMilliseconds());
    // console.log('total images', resizedImage.length)

}
main()


