import React from 'react'
import styled from "styled-components"


export default function Video(props) {
  const {video} = props
  return (
    <StyledVideo src={video.url}>
    
    </StyledVideo>
  )
}

const StyledVideo = styled.iframe`
  height: 50%;
  width: 80%;
`