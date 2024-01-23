import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';
import authRoutes from './routes/Auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDB is connected')})
.catch(err =>{
    console.log(err);
});


const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, ()=>{
    console.log('Server running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);