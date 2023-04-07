const mongoose=require("mongoose")

const masterqualificationSchema=mongoose.Schema({
   code:{type:Number,required:true},
   name:{type:String,required:true}
})
const masterqualificationModel=mongoose.model("masterQualification",masterqualificationSchema)

module.exports=masterqualificationModel