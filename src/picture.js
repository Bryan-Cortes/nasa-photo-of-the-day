import React from "react";
export default function Picture(props){
  const {picture} = props
  // console.log(media.url)
  const myStyle ={
    width: "920px", 
    height:"440px",
    border: '1px solid green',
  }
  return (
  <img style={myStyle} src={picture.url}/>
  );
};