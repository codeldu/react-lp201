import React from 'react'
import "./Box.scss"

export const Box = (props) => {

  return (
    <div className='test' style={{backgroundColor : props.bgColor, color : props.color}}>
        {props.children}
    </div>
  )
}
