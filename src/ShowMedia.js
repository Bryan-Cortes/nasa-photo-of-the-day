import React from 'react'
import Picture from './picture'
import Video from './Video'
import styled from "styled-components"

export default function BodyContent(props) {
  const {nasaData} = props
  return (

    <MediaContainer>
      {nasaData["media_type"] === 'image'? <Picture picture={nasaData}/> : <Video video={nasaData}/>}
    </MediaContainer>
  )
}

const MediaContainer = styled.div`
  width: 100%;
`