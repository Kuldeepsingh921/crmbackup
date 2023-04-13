const express=require("express")
const multer=require("multer")
const app=express()
app.use(express.json())

const storage = multer.diskStorage({
    destination:  (req, file, cb)=>{
       return cb(null, '/uploads')
    },
    filename: (req, file, cb)=>{
      return cb(null,`${Date.now()}'-'${file.filename}`)
    }
  })

  const upload=multer({storage})

  app.post("/public/uploads",upload.single('image1'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
  })
