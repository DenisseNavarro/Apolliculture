import React, { useState } from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ showOrder, setShowOrder }) => {
  // Estado para almacenar los productos en el carrito
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 2.29 },
    { id: 2, name: "Product 2", quantity: 1, price: 3.49 },
    { id: 3, name: "Product 3", quantity: 3, price: 4.99 },
  ]);

  // Función para eliminar un producto del carrito
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-amber-400 lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      
      <div className="relative pt-16 lg:pt-6 text-white p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className=" absolute left-4 top-4 p-1 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-xl text-center">Orders #151416</h1>

        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4 ml-3">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[400px] overflow-scroll">
            {products.map((product) => (
              <div key={product.id} className="bg-[#262837] p-4 w-30 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida.png" alt="Product" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">{product.name}</h5>
                      <p className="text-xs text-black">${product.price}</p>
                    </div>
                  </div>
                  <div>
                    <span>{product.quantity}</span>
                  </div>
                  <div>
                    <span>${product.quantity * product.price}</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..."
                    />
                  </form>
                  <div>
                    <button
                      className="border border-red-500 p-2 rounded-lg"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-amber-400 border border-white borde-10 absolute w-full bottom-0 left-0 p-4 lg:p-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-black">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black">Subtotal</span>
            <span>${products.reduce((acc, product) => acc + product.quantity * product.price, 0)}</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full h-8 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
