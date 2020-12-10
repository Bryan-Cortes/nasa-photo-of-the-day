import React from "react";

export default function Contents(props){
  const {content , date} = props
  const myStyle ={
    color: 'white',
    margin: '2.3% 10% 5%',
    fontSize: '1.3rem',

  }

  return (
    <div style={myStyle}>
      <div>Date: {date.date}</div>
      <p>{content.explanation}</p>
    </div>
  )
};