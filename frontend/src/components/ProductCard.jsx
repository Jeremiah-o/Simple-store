import { Edit2Icon, Trash2Icon } from "lucide-react";
import React, { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import EditProductModal from "./EditProductModal";

const ProductCard = ({ product, setProducts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
      toast.success("product deleted successfully");
    } catch (error) {
      console.log("Error in deleting the product", error);
      toast.error("Failed to delete Note");
    }
  };
  return (
    <div className="card-body shadow rounded overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg bg-base-100 p-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <div className="p-4">
        <h3 className="mb-2 text-sm text-base-content/80">{product.name}</h3>
        <p className="font-bold text-2xl mb-4 text-base-content/80 ">${product.price}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={()=> setIsModalOpen(true)}
            className="btn btn-ghost btn-xs text-success w-10 h-10"
          >
            <Edit2Icon />
          </button>
          <button 
            type="button"
            onClick={(e) => handleDelete(e, product._id)}
            className="btn btn-ghost btn-xs text-error w-10 h-10"
          >
            <Trash2Icon />
          </button>
        </div>
      </div>
      {isModalOpen && <EditProductModal product={product} setProducts={setProducts} onClose={()=>setIsModalOpen(false)} />}
    </div>
  );
};

export default ProductCard;
