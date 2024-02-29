import multer from "multer";
// using multer to store the uploaded applications on the on the uploads folder
const storageConfig = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/uploads");
    },
    filename:(req,file,cb)=>{
        const name =file.originalname;
        cb(null,name);
    }
}) 

export const uploadFile = multer({storage:storageConfig});