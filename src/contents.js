import React, {useState, useEffect} from "react";
export default function Contents(props){
  const {content , date} = props

  return (
    <div>
      <div>{date.date}</div>
      <p>{content.explanation}</p>
    </div>
  )
};