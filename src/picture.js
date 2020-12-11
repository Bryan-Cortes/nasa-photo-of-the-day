import React from "react";
import styled from "styled-components"
export default function Picture(props){
  const {picture} = props

  return (
  <StyledImage src={picture.url}>
    
  </StyledImage>
  );
};


const StyledImage = styled.img`
  width: 45%;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`