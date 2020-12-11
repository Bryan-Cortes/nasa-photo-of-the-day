import React from 'react'
import styled from "styled-components"


export default function Video(props) {
  const {video} = props
  return (
    <VideoDiv>
      <iframe src={video.url}></iframe>
    </VideoDiv>
  )
}

const VideoDiv = styled.div`
  width: 920px; 
  height: 440px;
  border: 1px solid green;
`