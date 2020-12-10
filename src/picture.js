import React, {useState, useEffect} from "react";
export default function Picture(props){
  const {media} = props
  // console.log(media.url)
  return (
  <iframe src={media.url}></iframe>
  );
};