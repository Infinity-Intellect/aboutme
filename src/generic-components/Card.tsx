import React, { PropsWithChildren } from 'react'

interface ICardProps {
  colorClass?: string;
}
function CardWrapper(props: PropsWithChildren<ICardProps>) {
  return <div className={`card p-2 card-shadow m-2 ${props.colorClass}`}>
    {props.children}
  </div>
}

export default CardWrapper