import React from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";


interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button 
        onClick={() => onAddToCart(product)} 
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600"
        
      >
        Añadir Producto<MdOutlineAddShoppingCart />

      </button>
    </div>
  );
};

export default ProductItem;
