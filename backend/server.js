import express from 'express'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/product.route.js'

dotenv.config()

const app = express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use("/api/products",productRoutes)

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});



//Q2xoKF6o2sAcZ2zz

// mongodb+srv://omondijeremia2005_db_user:Q2xoKF6o2sAcZ2zz@cluster0.zzdpy82.mongodb.net/?appName=Cluster0