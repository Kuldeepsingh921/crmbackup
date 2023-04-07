const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        const date = Date.now() 
        cb(null,  date+"-"+file.originalname)
    }
  });

    const fileFilter=(req,file,cb)=>{
        const allowedFileTypes=["image/jpeg","image/jpg","image/png","image/webp"]
        if(allowedFileTypes.includes(file.mimetype)){
            cb(null,true)
        }
        else{
            cb(
                new Error("please change your file type or fill type not support")
                ,false)
        }
    }

    const mustbe={
        storage:storage,
        fileFilter:fileFilter
    }
  
    const uploads = multer(mustbe)
    module.exports=uploads