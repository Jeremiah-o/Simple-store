import Product from '../models/product.model.js'
import mongoose from 'mongoose'

 export const getProduct= async(req,res)=>{
    try {
        const allProducts= await Product.find()
        res.status(201).json({success:true,data:allProducts ,messge:"Products fetched successfully"})
    } catch (error) {
        console.log("Error in trying to fetch product")
        res.status(500).json({success:false, messge:"Server error"})
    }
}

export const createProduct= async(req,res)=>{
    const product= req.body
    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, messge:"Please provide all fields"})
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct, messge:"Product created successfully"})
    } catch (error) {
        console.log("Error in trying to create product")
        res.status(500).json({success:false, messge:"Server error"}) 
    }
}

export const updateProduct= async(req,res)=>{
    const {id}= req.params

    const updateProduct= req.body

    if( !mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({success:false, message:"invalid product id"}) 
    }

    try {
        const updatedProduct=await Product.findByIdAndUpdate(id, updateProduct,{new:true})
        res.status(201).json({success:true,data:updatedProduct ,messge:"Product updated successfully"})
    } catch (error) {
        res.status(500).json({success:false, message:"server error"}) 
        console.log("error trying to update product",error)
    }
}

export const deleteProduct= async(req,res)=>{
    const {id}= req.params

    if( !mongoose.Types.ObjectId.isValid(id)){
        res.status(500).json({success:false, message:"invalid product id"}) 
    }

    try {
        await Product.findByIdAndDelete(id)
        res.status(201).json({success:true, messge:"Product deleted successfully"})
    } catch (error) {
        console.log("Error in trying to delete product")
        res.status(404).json({success:false, messge:"Producr not found"})
    }
}