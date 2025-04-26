import {User} from './../Modals/user.modal.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../Utils/generateToken.js'


export const signUp= async (req,res) => {
    const {name,email,password}=req.body;
    try {
        const existingUser= await User.findOne({email})
        if (existingUser) {
            return res.status(400).json({message:"user already exists"})
        }
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        if (password.length <6) {
            return res.status(400).json({message:"Password must be at least 6 characters long"})
        }

        const salt=bcrypt.genSaltSync(10);
        const hashedpassword=bcrypt.hashSync(password,salt);

        const newUser= new User({
            email,
            name,
            password:hashedpassword 
        })
        await newUser.save()
        generateToken(newUser._id,res)
        return res.status(201).json({message:"User created successfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal server error in signup controller"})   
    }
}



export const signIn=async (req,res) => {
    const {email,password}=req.body
    try {
       const existingUser=await User.findOne({email})
       if (existingUser) {
        const verify=bcrypt.compareSync(password,existingUser.password)

        if (verify) {
            generateToken(existingUser._id,res)
            return res.status(200).json({email,name:existingUser.name})
        } else{
            return res.status(400).json({message:"Wrong email or password"})
        }
       } else{
        res.status(400).json({
            message:"Invalid Credentials"
          })
       }
    } catch (error) {
        console.log(error.message,"error in signin controller");    
    }
}