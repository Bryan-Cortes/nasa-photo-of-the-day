import React from "react";
import styled from "styled-components"
export default function Picture(props){
  const {picture} = props

  return (
  <ImageDiv>
    <img src={picture.url}/>
  </ImageDiv>
  );
};


const ImageDiv = styled.div`

`