import React from 'react'
import Picture from './picture'
import Video from './Video'

export default function BodyContent(props) {
  const {nasaData} = props
  return (
    <div>
      
      {nasaData["media_type"] === 'image'? <Picture picture={nasaData}/> : <Video video={nasaData}/>}
      
    </div>
  )
}


// if(nasaData === img){
//   <Picture picture={nasaData}/>
// } else{
//   <Video video={nasaData}/>
// }