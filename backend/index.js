import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './Utils/Connect.js';
import cors from 'cors'
import AuthRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


const PORT=process.env.PORT || 5000;
 connectDB()


app.get("/",(req,res)=> {
    res.json({message:"Welcome to the backend"})
})

app.use('/api/auth',AuthRoute)

app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`)
})


