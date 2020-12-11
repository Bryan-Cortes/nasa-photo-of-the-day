import React from "react";
import styled from "styled-components"

export default function Title(props){
  const {title} = props

  return (
    
    <div>
      <StyledTitles>
      <h1>
        NASA Photo Of The Day
      </h1>
      <h2>{title.title}</h2>
      </StyledTitles>
    </div>
  )
};

const StyledTitles = styled.div`

  h1 {
  font-size: 2.5rem;
  color: ${(props) =>  props.theme.primaryColor};

  }

  h2 {

  font-size: 2.5rem;
  color: green;

  }
`