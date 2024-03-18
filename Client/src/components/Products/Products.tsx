import React, { useState } from "react";


interface ProductProps {
  image: string;
  name: string;
  price: number;
  description: string;
  units_stock: number;
}

const Product: React.FC<ProductProps> = (props) => {
  const { image, name, price,} = props;
  


  return (
   
    <div className="bg-White p-8 flex flex-col items-center gap-1 text-center text-black border mt-16 border-amber-400 border-2 ml-2 mr-2 w-80 h-100">
      <img
        src={image}
        className="w-60 h-60 object-cover lg: w-60 h-60 -mt-16 rounded-full bg-black border-2 border-amber-400"
        alt=""
      />
      
      <div className="flex flex-col items-center text-lg">
  <span className="text-amber-500">{price}€</span>
</div>

      <h6 className="text-2xl lg: text-xl  text-bold ">{name}</h6>
      
      <button
        className="bg-amber-400 lg : text-xs text-black border border-white py-2 px-4 rounded-md hover:boder-transparent hover:text-white"
      
      >
        Add products
      </button>
      </div>
      
          
   
  );
};

export default Product;
