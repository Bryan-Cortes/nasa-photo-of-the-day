import React from "react";

export default function Title(props){
  const {title} = props
  const myStyle ={
    fontSize: '2.5rem',
    color: 'white',
    
  }
  
  return (
    
    <div>
      <h1 style={myStyle}>NASA Photo Of The Day</h1>
      <h2 style={myStyle}> {title.title}</h2>
    </div>
  )
};