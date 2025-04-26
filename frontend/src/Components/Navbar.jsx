import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-3 bg-white text-gray-800 shadow-md sticky top-0 z-50">
       <div className="flex w-full md:w-auto justify-between items-center">
         <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Elysium</h2>
         <button 
           className="md:hidden text-gray-700" 
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           {isMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           )}
         </button>
       </div>
       
       <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 items-center`}>
        <NavLink to={"/"}> <li className="text-sm cursor-pointer hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full">Home</li>  </NavLink> 

        <NavLink> <li className="text-sm cursor-pointer hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full">Menu</li> </NavLink>

        <NavLink>  <li className="text-sm cursor-pointer hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full">Mobile-App</li> </NavLink>
        
          <NavLink>
             <li className="text-sm cursor-pointer hover:text-blue-600 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-[-5px] after:transition-all after:duration-300 hover:after:w-full">Contact-Us</li> </NavLink>
       </ul>
       
       <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-10 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end`}>
           <img src={assets.search_icon} alt="" className="w-4 h-4 cursor-pointer hover:opacity-80 transition-opacity" />
           <div className="relative">
               <img src={assets.basket_icon} alt="" className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity" />
               <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">0</span>
           </div>
           <button
             onClick={()=> navigate('/login')}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md">Sign in</button>
       </div>
    </div>
  )
}

export default Navbar
