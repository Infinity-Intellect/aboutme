import React from 'react'

interface IconProps {
  url: string;
  height?: string;
  width?: string;
}
function Icon({ url, width, height }: IconProps) {

  if (url.length > 0) {
    return <img className="m-2 object-contain" src={require(`../assets/icons/${url}`)} style={{ width: width ? width : '60px', height: height ? height : '60px' }} alt="icon" />
  }
  else {
    return <span>-</span>
  }
}

export default Icon;