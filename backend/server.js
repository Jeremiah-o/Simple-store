import express from 'express'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import path from 'path'
import productRoutes from './routes/product.route.js'
import cors from 'cors'
dotenv.config({ path: './backend/.env' })

const app = express()
const port=process.env.PORT || 3000

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const __dirname= path.resolve()

app.use(express.json())
app.use("/api/products",productRoutes)

if (process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"frontend","dist")))
  app.get((req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
}

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});



//Q2xoKF6o2sAcZ2zz

// mongodb+srv://omondijeremia2005_db_user:Q2xoKF6o2sAcZ2zz@cluster0.zzdpy82.mongodb.net/?appName=Cluster0