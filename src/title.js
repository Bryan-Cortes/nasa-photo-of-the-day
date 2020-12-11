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
      </StyledTitles>
    </div>
  )
};

const StyledTitles = styled.div`

  h1 {
  font-size: 3.3rem;
  color: ${(props) =>  props.theme.primaryColor};
  font-family: 'arial';
  }

`