import React from "react";

export default function Title(props){
  const {title} = props
  const myStyle ={
    fontSize: '2.5rem',
    color: 'white',
    
  }
  
  return (<h2 style={myStyle}> {title.title}</h2>)
  
};