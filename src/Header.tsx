import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

interface ILinkProps {
  href: string;
  title: string;
}

function Header() {

  const [showMenu, setShowMenu] = useState(false)

  const LINKS: ILinkProps[] = [
    {
      title: "Home",
      href: 'landing'
    },
    {
      title: "Work/Education",
      href: 'workAndEducation'
    },
    {
      title: "Skills",
      href: 'skills'
    },
    {
      title: "Contact",
      href: 'contact'
    }
  ]

  const navigate = (href: string) => {
    let element = document.getElementById(href)
    if (element) {
      setTimeout(() => {
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 1);
    }
    setShowMenu(false)
  }

  return (
    <div className="flex py-2 px-4 items-center justify-between card-shadow relative">
      <div id="headerLeftPane" className="flex flex-row items-center">
        <div id="avatar" className="mr-2">
          <img src={require('./icons/squareDisplayPicture.jpg')} alt="atr" className="rounded-full" width={50} height={50} />
        </div>
        <div className="font-bold text-lg text-primary">SIDD</div>
      </div>
      <div className="xs:hidden md:flex">
        {LINKS.map((linkObject, idx) => <Link key={idx} title={linkObject.title} href={linkObject.href} navigate={navigate}/>)}
      </div>
      <div className="xs:block md:hidden cursor-pointer">
        <AiOutlineMenu size={22} onClick={() => { setShowMenu(!showMenu) }} />
      </div>
      {showMenu && <div className="absolute top-20 right-4 p-4 w-60 card-shadow bg-white break-words">
        {LINKS.map((linkObject, idx) => <Link key={idx} title={linkObject.title} href={linkObject.href} navigate={navigate}/>)}
      </div>}
    </div>
  )
}

function Link(props: ILinkProps & {navigate:Function}) {

  return <div className="px-4 xs:py-2 md:py-0 cursor-pointer hover:text-primary ease-in-out duration-200"
    onClick={()=>{props.navigate(props.href)}}>{props.title}</div>
}

export default Header;