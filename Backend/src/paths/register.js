import user from "../schema.js"
import bcrypt from 'bcrypt' 


const register = (req,res)=>{
    const {name,email,pass} = req.body
    if(!name || !email || !pass){
        return res.status(400).json({ error: "Missing required fields" });

    }

    user.findOne({email})
    .then((user)=>{
        if(user){
            res.status(409).json({ success: false, message: "User already exists" });
            return null
        }
        return bcrypt.hash(pass,10)
    })
    .then((hash_pass)=>{
            const new_user = new user({name,email,pass:hash_pass})
            return new_user.save()   
        })
    .then(()=> res.status(200).json({ success: true, message: "User registered successfully" }))
    .catch((err)=>res.status(500).json(err))
    
}

export default register