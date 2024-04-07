const mongoose=require('mongoose')


const contactSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    age:Number
})

const Contact=mongoose.model("contact",contactSchema)

module.exports=Contact
