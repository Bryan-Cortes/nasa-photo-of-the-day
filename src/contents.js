import React, {useState} from "react";
import styled from "styled-components"

// &date=2012-03-14
export default function Contents(props){
  const {content , date, title} = props
  const [previousDay, setPreviousDay]  = useState(null);
  const [nextDay, setNextDay]  = useState(null);


  return (
    <ContentDiv>
      <h2>{title.title}</h2>

      <button onClick={()=>setPreviousDay()}>Previous Day</button>

      <div>Date: {date.date}</div>
      <button onClick={()=> setNextDay()}>Next Day</button>
      
      

      <p>{content.explanation}</p>
    </ContentDiv>
  )
};


const ContentDiv = styled.div`
    color: white;
    margin: 2.3% 10% 5%;
    font-size: 1.3rem;

    
    h2 {

      font-size: 2rem;
      color: ${(props) =>  props.theme.thirdColor};

    }
    div{
      font-size: 1.2rem;
      font-weight: bold;
      color: ${(props) =>  props.theme.thirdColor};
      display: inline;
    };

    p{
      color: ${(props) =>  props.theme.secondaryColor};
      
    };
    button {
      display: inline;
      margin: 0 5%;
      color: ${(props) =>  props.theme.backGroundColor};
      padding: 1.3%;
      border: 0 solid grey;
      border-radius: 10px;


    };
`

// {date.date === date.date ? '{<button onClick={()=> setNextDay()}>Next Day</button>}' : null}