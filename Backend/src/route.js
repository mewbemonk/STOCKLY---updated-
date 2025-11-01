import express from 'express'
import login from './paths/login.js';
import register from './paths/register.js';




const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to MERN Conferencing API');

})

router.post('/login',login)

router.post('/register',register)


router.get('/register', (req, res) => {
  res.send('GET: Registration form');
});

router.get('/login', (req, res) => {
  
  res.send('POST: login user');
});




export default router