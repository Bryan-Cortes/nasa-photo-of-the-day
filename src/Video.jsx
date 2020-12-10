import React from 'react'
const myStyle ={
  width: "920px", 
  height:"440px",
  border: '1px solid green',
}

export default function Video(props) {
  const {video} = props
  return (
    <iframe style={myStyle} src={video.url}></iframe>
  )
}
