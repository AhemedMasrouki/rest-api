const express=require('express')

const router=express.Router()
const Contact=require("../models/contactSchema")

router.delete('/delete/:idd',async(req,res)=>{
    try {
        const delete_contacts=await Contact.findByIdAndDelete(req.params.idd)
        res.status(200).json({msg:"Contact deletted",delete_contacts})
    } catch (error) {
        res.status(500).json({msg:"somthing went wrong",error})
    }
})


module.exports=router