import React, { useEffect, useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

export interface IAccordionProps {
  title: string;
  subtitle: string;
  description: string;
  body: string;
  iconPath?: string;
  expanded?: boolean;
}

function Accordion(props: IAccordionProps) {

  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (props.expanded) {
      setExpanded(props.expanded)
    }
  }, [props.expanded])

  return <div className='card-shadow cursor-pointer my-4' onClick={() => { setExpanded(!expanded) }}>
    <div id="accordionHeader" className="flex flex-row items-center justify-between p-2">
      <div id="leftPane">
        <div id="accordionTitle" className="font-bold md:text-xl xs:text-base">
          {props.title}
        </div>
        <div id="accordionDescription" className="md:text-base xs:text-sm font-normal text-slate-500">
          {props.description}
        </div>
      </div>
      <div id="rightPane" className="flex flex-row items-center">
        <div id="accordionSubtitle" className="text-sm font-normal text-slate-500">
          {props.subtitle}
        </div>
        <div id="accordionCta" className="ml-4">
          {expanded ? <FiMinusCircle color='#CD1B1B' size={26} /> : <FiPlusCircle color='#CD1B1B' size={26} />}
        </div>
      </div>
    </div>
    <div id="accordionBody" className={`${expanded ? 'block' : 'hidden'} my-2 p-2 bg-slate-50 flex items-center`}>
      <div className='basis-3/4' dangerouslySetInnerHTML={{ __html: props.body }}>

      </div>
      <div className='basis-1/4 flex justify-end'>
        {props.iconPath!==undefined && <img src={require(`../assets/icons/${props.iconPath}`)} className="xs:w-[50px] md:w-[100px]" alt="logo" />}
      </div>
    </div>
  </div>
}

export default Accordion