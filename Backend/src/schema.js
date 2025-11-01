import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name:{type:String},
    email:{type:String, required:true},
    pass:{type:String,required:true},
    meet_id:{type:String},
    date:{type:Date, default:Date.now},
    token:{type:String}
})

const user = mongoose.model('user',schema)

export default user