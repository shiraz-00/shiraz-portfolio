import React from 'react'
import SubMinder from '../assets/subminder.png'
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects!</p>
        </div>

        <div className="display: flex; align-items: center">
          <a href="http://specific-url.com">
            <img
              className="w-40 cursor-pointer hover:scale-110 duration-500"
              src={SubMinder}
              alt="HTML icon"
            />
          </a>
          <p>
            SubMinder is a project I worked on with 5 other developers for our
            final project during our last week at Dev Academy. This app allows
            you to track any subscriptions you have recurring such as netflix,
            spotify etc. Something new I learned during this project was setting
            up the email reminders. Other features we added include Auth0 for
            our secure login system, ability to view past/current payments, and
            the ability to add, update and delete subscriptions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
