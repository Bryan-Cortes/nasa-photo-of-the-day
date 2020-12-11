import React from "react";
import styled from "styled-components"

export default function Contents(props){
  const {content , date} = props
  

  return (
    <ContentDiv>
      <div>Date: {date.date}</div>
      <p>{content.explanation}</p>
    </ContentDiv>
  )
};


const ContentDiv = styled.div`
    color: white;
    margin: 2.3% 10% 5%;
    font-size: 1.3rem;

    div{
      font-size: 2.5rem;
    };

    p{
      color: green;
    };
`