import React from 'react'

const Image = ({className, imgSrc}) => {
  return (
  <img className={`${className}`} src={imgSrc} />
  )
}

export default Image