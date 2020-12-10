import React from "react";
export default function Picture(props){
  const {media} = props
  // console.log(media.url)
  const myStyle ={
    width: "920px", 
    height:"440px",
    border: '1px solid green',
  }
  return (
  <iframe style={myStyle} src={media.url}></iframe>
  );
};