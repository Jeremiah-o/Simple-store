import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchNotes = async () => {
      try {
        const res = await api.get("/products")
        console.log(res.data)
        setProducts(res.data.data)
      } 
      catch (error) {
        console.log("Error in fetching products",error)
        toast.error("Failed to fetch Products")
      }
      finally{
        setLoading(false)
      }
    }

    fetchNotes()
  },[])
  return (
    <div className='max-h-5 max-w-[80vw] mx-auto'>
      <h1 className='text-center text-3xl font-bold mb-8'>Current Products</h1>
      <div>
        {loading && <div>Loading Products</div>}
        {products.length===0 && <p className='text-center text-3xl'>No Products found😐 <Link to={"/create"}><span className='text-blue-400 hover:text-blue-300'>Creat a Product</span></Link></p>}
        {products.length>0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product)=>(
              <ProductCard key={product._id} product={product} setProducts={setProducts}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage