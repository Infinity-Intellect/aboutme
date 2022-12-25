import React from 'react'

function Landing() {
  return (
    <section id="landing" className="text-center py-[15%]">
      <div className="w-[60%] m-auto">
        <div id="heroTitle" className='xs:text-[22px] text-[32px]'>
          Hi there ! I'm <span className='xs:text-[28px] text-[40px] font-bold text-primary'>Siddeshwar Navaneetharan</span>
        </div>
        <div id="heroAbout" className="py-12 xs:w-[90%] w-[60%] m-auto text-lg">
          A software developer experienced in building full-stack web  applications, with a penchant for taking on new and exciting challenges.
        </div>
        <a href={require('../assets/resume.pdf')} rel="noopener noreferrer" target="_blank">
          <button type="button" className="focus:outline-none text-white bg-primary hover:bg-red-800 focus:ring-4 focus:ring-red-300 
        font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2">Get My Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Landing;