import React, { useState, useEffect } from 'react';
import Product from '../components/Products/Products';
import { FaShoppingCart } from "react-icons/fa"

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Estado para almacenar los productos

  useEffect(() => {
    // Función para obtener los productos de la API falsa
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/Products'); // Corrected endpoint URL
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Error al obtener los productos');
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Llamar a la función para obtener los productos al montar el componente
    fetchProducts();
  }, []);

  return (

    <div>
    <div className="flex justify-around  mt-7 space-x-10">
    <h1 className="text-xl lg:text-2xl lg:space text-bold ">Choose your products</h1>
    <button className="text-2xl rounded-md bg-amber-400 text-white px-4 h-10"
    ><FaShoppingCart /></button>
    </div>
    
    <div className='p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-16 lg: mr-6 ml-6 lg:p-8 '>
    
      {products.map(product => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          units_stock={product.units_stock} 
        />
      ))}
    </div>
    </div>
  );
};

export default ProductList;
