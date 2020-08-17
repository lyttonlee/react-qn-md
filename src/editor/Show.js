import React from 'react'
import '../assets/css/atom-one-dark.css'

const Show = (props) => {
  const {
    customStyle,
    htmlInfo
  } = props
  // console.log(htmlInfo)
  return (
    <div className="show" style={customStyle} dangerouslySetInnerHTML={{__html: htmlInfo}} ></div>
  )
}

export default Show
