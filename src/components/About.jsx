import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-68 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-bold">
            <p>I'm Shiraz, nice to meet you.</p>
          </div>
          <div>
            <p>
              I am a recently qualified Full-stack Developer based in Auckland,
              New Zealand, and I'm excited to continue growing my coding skills
              and gaining experience in the industry. I'm passionate about
              working with others and being part of a team, and I'm searching
              for an opportunity that not only challenges my technical skills,
              but also allows me to develop my interpersonal skills. For a
              glimpse of my technical skills and past projects, feel free to
              browse my portfolio!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
