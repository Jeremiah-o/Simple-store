import React, { useState } from "react";
import toast from 'react-hot-toast'
import api from "../lib/axios";
import { useNavigate } from "react-router";

const CreatePage = () => {

  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!name.trim() || !price.trim() || !image.trim()){
      toast.error("All fields are required")
      return
    }
    else{
      console.log(name,price,image)
    }
    setLoading(true)
    try {
      await api.post("/products",{ name,price,image})
      toast.success("Product created successfully")
      navigate("/")
    } catch (error) {
      console.log("error creating product ",error)      
      toast.error("Failed to create product") 
    } finally{
      setLoading(false)
    }
  };
  return (
    <div className="max-h-5 max-w-[80vw] mx-auto">
      <h1 className="text-center text-3xl font-bold mb-8 text-white">
        Create New Product
      </h1>

      <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Product name"
          className="input input-bordered text-center w-1/2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          inputMode="numeric"
          placeholder="Price"
          className="input input-bordered text-center w-1/2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered text-center w-1/2"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-1/2" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
