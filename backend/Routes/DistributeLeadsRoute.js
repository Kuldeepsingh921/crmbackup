// const express=require("express")

// const app=express.Router()

// app.use(express.json())

// const excelleads=require("../Model/excelleadsModal")

// const distributeLeads=require("../Model/DistributeLeadsModel")

// const councellor=require("../Model/AddCounsellor")

// app.get("/:id",async(req,res)=>{
//     const id=req.params.id
//     try{
//         const leads=await distributeLeads.find({"userId":id})
//         res.send(leads).status(200)
//     }
//    catch(err){
//     res.send(err).status(400)
//    }

// })

// app.get("/leads",async(req,res)=>{
//      const leads=await excelleads.find()
//      const user=await councellor.find()
//      const halfleads=Math.floor(leads.length/user.length)

//      console.log(typeof halfleads)

// try{
//     let i=0
//      let j=0
//   while(i<leads.length){
//     if(i==halfleads){
//         j++
//         i++
//     }
//     else{
//         const distribute=new distributeLeads({name:leads[i].name,email:leads[i].email,phoneno:leads[i].mobileno,assignedto:user[j].name,userId:user[j]._id})
//         await distribute.save()
//        i++
//     }
// }
// }
// catch(err){
// res.send("hello piyush " + err)

// }
// })

// module.exports=app


const express=require("express")

const app=express.Router()

app.use(express.json())

const excelleads=require("../Model/excelleadsModal")

const distributeLeads=require("../Model/DistributeLeadsModel")

const councellor=require("../Model/AddCounsellor")

app.get("/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const leads=await distributeLeads.find({"userId":id})
        res.send(leads).status(200)
    }
   catch(err){
    res.send(err).status(400)
   }

})




app.post("/leads",async(req,res)=>{
     const leads=await excelleads.find()
     const user=await councellor.find()
     const halfleads=Math.floor(leads.length/user.length)
     const distributedleads=await distributeLeads.find()

     console.log(typeof halfleads)

try{
    let i=distributedleads?distributedleads.length:0
     let j=0
     let sum=halfleads
  while(i<leads.length){
    if(i==sum){
        j++
        i++
        sum=sum+halfleads
    }
    else{
        const distribute=new distributeLeads({name:leads[i].name,email:leads[i].email,phoneno:leads[i].mobileno,assignedto:user[j].name,userId:user[j]._id})
        await distribute.save()
       i++
    }
}
}
catch(err){
res.send("hello piyush " + err)

}

// app.post("/addleads",(req,res)=>{
//     res.send("hello")
// })
  


})


module.exports=app