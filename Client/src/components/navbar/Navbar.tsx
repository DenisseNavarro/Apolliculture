import  { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-amber-400 lg:py-1 relative">
      <div className="container mx-auto flex px-1 xl:px-0 items-center"> 
        <div className='flex flex-grow'>
        <img src="../src/assets/images/ApolliLogo.png" alt='logo' className="w-40 h-auto p-2 lg:w-25 lg:mt-2" /> 
        </div>
        <div className='lg:hidden'>
          <button 
            className='mt-11 mr-5 bg-amber-300 text-black border border-white rounded-md hover:border-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out'
            onClick={handleClick}
          >
            {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </button>
        </div>

        <div className={`lg:hidden fixed top-0 left-0 h-full bg-white w-60 shadow-md z-50 transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div>
          <img src="../src/assets/images/ApolliLogo.png" alt='logo' className="w-40 h-auto md-6  lg:w-60 lg:mt-[-35px] " />       </div>
          
          <div className='p-4'>
            <a href="/Home" className="block text-lg text-gray-800 font-semibold mb-2">HOME</a>
            <a href="/Home#about" className="block text-lg text-gray-800 font-semibold mb-2">ABOUT US</a>
            <a href="/ProductList" className="block text-lg text-gray-800 font-semibold mb-2">PRODUCTS</a>
            <a href="#contact" className="block text-lg text-gray-800 font-semibold mb-2">CONTACT US</a>
            <a href="/users" className="block text-amber-400 text-xl font-semibold mb-2">USERS</a>
            <a href="/dashboard" className="block text-amber-400 text-xl font-semibold mb-2">SELL</a>
            <a href="/loginregister" className="block text-amber-400 text-xl font-semibold mb-2">SIGN IN</a>
          </div>
        </div>

        {/* Menú dispositivos grandes */}
        <div className="lg:flex hidden flex-grow justify-between">
          <div className='item-center justify-center flex space-x-16 mt-3 ml-4'>
            <a href="/Home" className="text-white hover:text-black transition duration-500 ease-in-out">HOME</a>
            <a href="/Home#about" className="text-white hover:text-black transition duration-500 ease-in-out">ABOUT US</a>
            <a href="/ProductList" className="text-white hover:text-black transition duration-500 ease-in-out">PRODUCTS</a>
            <a href="#contact" className="text-white hover:text-black transition duration-500 ease-in-out">CONTACT US</a>
          </div>
          <div className='flex items-center px-9 mt-9'>
            <a href="/users"><FaUserCircle className="w-8 h-8 mr-3" /></a>
            <a href="/dashboard" className="bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:border-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out mr-3">Sell</a>
            <a href="/loginregister" className="bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:border-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out">Sign in</a>
          </div>
          </div>
      <div className='lg: hidden flex justify-center lg:mt-[-60px]'>
          <input className=" mb-5 bg-white border border-amber-500 text-black w-8/12 h-7  lg:w-6/12 h-9 rounded-3xl px-4" type='text' placeholder="Search..." />
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
