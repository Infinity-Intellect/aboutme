import React from 'react'

interface ITitleProps {
  title: string;
}
function Title({ title }: ITitleProps) {
  return <h1 className="relative xs:text-[20px] md:text-[28px] text-center p-4 font-bold after:w-[3rem] after:h-[5px] after:bg-primary 
  after:absolute after:top-[80%] after:left-[50%] after:translate-x-[-50%]">{title}</h1>
}

export default Title;