import React, { useState } from 'react';
import Cart from './Cart'; 
import { FaShoppingCart } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";


// Asumiendo que ya tienes el componente ShoppingCart

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products: React.FC<{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="container mx-auto">
     
      <button 
        onClick={toggleCart} 
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 flex items-center"
      >
        {isCartOpen ? (
          <BsArrowLeft />

        ) : (
          <FaShoppingCart />
        )}
        {isCartOpen ? '' : ''}
      </button>
      {isCartOpen && <Cart />}
      {/* Mostrar el componente ShoppingCart solo si isCartOpen es true */}
      
    </div>
  );
};

export default Products;
