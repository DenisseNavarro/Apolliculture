import React from 'react';

interface ProductProps {
  product: any; // Puede que necesites ajustar esto dependiendo de cómo estén definidos tus productos
  addToCart: (product: any) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-White p-8 flex flex-col items-center gap-1 text-center text-black border mt-16 border-amber-400 border-2 ml-2 mr-2 w-80 h-100">
    <img
      src={product.image}
      className="w-60 h-60 object-cover lg: w-60 h-60 -mt-16 rounded-full bg-black border-2 border-amber-400"
      alt=""
    />
    
    <div className="flex flex-col items-center text-lg">
<span className="text-amber-500">{product.price}€</span>
</div>

    <h6 className="text-2xl lg: text-xl  text-bold ">{product.name}</h6>
    
    <button
      onClick={handleAddToCart} 
      className="bg-amber-400 lg : text-xs text-black border border-white py-2 px-4 rounded-md hover:boder-transparent hover:text-white"
    
    >
      Add products
    </button>
    </div>
  );
};

export default Product;
