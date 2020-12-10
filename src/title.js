import React, {useState, useEffect} from "react";

export default function Title(props){
  const {title} = props
  
  return (<h2> {title.title}</h2>)
  
};