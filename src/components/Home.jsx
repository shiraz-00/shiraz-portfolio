import React from 'react'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          Welcome to Shiraz's Portfolio
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Qualified full-stack developer
        </p>
      </div>
    </div>
  )
}

export default Home
