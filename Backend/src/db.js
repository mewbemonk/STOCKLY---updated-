import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const db = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('db connected'))
    .catch((err)=>console.error(err))
}
export default db