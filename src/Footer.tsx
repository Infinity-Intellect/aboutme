import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <section id="footer" className="bg-primary text-white flex justify-between items-center py-1 px-2">
      <div id="footerText" className='xs:text-[10px] md:text-base basis-1/2'>
        Made with React and ❤ by Siddeshwar Navaneetharan
      </div>
      <div id="socials" className="flex cursor-pointer basis-1/2 justify-end">
        <BsLinkedin size={25} onClick={()=>{window.open("https://www.linkedin.com/in/siddeshwar-navanetharan/")}}/>
        <BsGithub size={25} className="ml-2" onClick={()=>{window.open("https://github.com/Infinity-Intellect")}}/>
      </div>
    </section>
  )
}

export default Footer;