import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';
import authRoutes from './routes/Auth.route.js';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDB is connected')})
.catch(err =>{
    console.log(err);
});


const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.listen(port, ()=>{
    console.log('Server running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});