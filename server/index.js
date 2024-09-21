import express from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import mongoose from "mongoose"


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if(conn){
       console.log(`MongoDB connected successfully!!`
       )
    }
}
connectDB();


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`)
})
