import React from 'react'

const Header = () => {
  return (
    <div className="mx-auto my-8 w-[70%] h-[60vh] relative overflow-hidden rounded-xl shadow-xl" 
         style={{ backgroundImage: "url(header_img.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-orange-900/30 to-transparent"></div>
      
      <div className="absolute bottom-8 left-8 max-w-xl text-left z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Elysium Restaurant
        </h1>
        <p className="text-sm md:text-base text-gray-100 mb-4 leading-relaxed font-medium">
          Experience culinary excellence at Elysium, where every dish tells a story.
        </p>
        <div className="flex flex-row gap-3">
          <button className="px-5 py-2 bg-white text-orange-600 font-semibold rounded-md hover:bg-orange-50 transition-all duration-300 shadow-lg text-sm">
            Reserve a Table
          </button>
          <button className="px-5 py-2 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-all duration-300 shadow-lg text-sm">
            View Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
