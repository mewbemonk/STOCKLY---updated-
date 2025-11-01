import crypto from 'crypto'
import bcrypt from 'bcrypt'
import user from '../schema.js'

const login = (req,res)=>{
    const {email,pass} = req.body

    if(!email || !pass){
        return res.status(400).json('enter correct credentials')
    }
    user.findOne({email})
    .then(found=>{
        if(!found){
            res.status(401).json({ success: false, message: 'User not found' })
            return null;
        }
        return bcrypt.compare(pass,found.pass)
        .then((match)=>{
            if(!match){
                res.status(401).json({ success: false, message: 'Invalid password' })
                return null
            }
            let token = crypto.randomBytes(20).toString('hex')
            found.token = token
            return found.save()
        })
        .then(()=>res.status(200).json({ success: true, message: 'Login Successful' }))
        
    })
    .catch((err)=>res.status(500).json({ success: false, message: 'Server error', error: err }))
}

export default login
