import React, { useState } from 'react'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const EditProductModal = ({product,setProducts,onClose}) => {
    const [formData, setFormData]=useState({
        name: product.name,
        price: product.price,
        image: product.image
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const res = await api.put(`/products/${product._id}`,formData)
            setProducts((prev)=>prev.map((p)=>(p._id===product._id ? res.data.data : p)))
            toast.success("Product updated successfully")
            onClose()
        } catch (error) {
            console.error(error)
            toast.error("Failed to update product")
        }
    }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60 z-50'>
        <div className='bg-base-100 rounded-xl p-6 w-96 relative shadow-xl'>
            <h2 className='text-3xl font-semibold mb-4 text-center'>Edit Product</h2>
            <form onSubmit={handleSubmit} className='space-y-3'>
                <input 
                  type="text"
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Product Name'
                  className='input input-bordered w-full' 
                />
                <input 
                  type="number"
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  placeholder='Price'
                  className='input input-bordered w-full' 
                />
                <input 
                  type="text"
                  name='image'
                  value={formData.image}
                  onChange={handleChange}
                  placeholder='Image URL'
                  className='input input-bordered w-full' 
                />
                <div className='flex justify-end gap-2 mt-4'>
                    <button type='submit' className='btn btn-primary btn-sm'>Save</button>
                    <button type='button' onClick={onClose} className='btn btn-outline btn-sm'>Cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProductModal