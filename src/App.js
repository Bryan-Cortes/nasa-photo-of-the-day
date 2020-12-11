import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Title from './title'
import ShowMedia from "./ShowMedia";
import Contents from './contents'
import styled from "styled-components"


const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY='?api_key=0mi6eSYgNcmFw9h8zjAb0O926BYVBPVlJejOQbnw';





function App() {
  
  // State setters
  const [nasaData, setNasaData] =useState({})

  // fetching API from NASA and using useEffect so it only renders once.
  useEffect(()=>{
    const fetchNasaData = () =>{
      axios 
      .get(`${URL}${API_KEY}`)
      .then((response)=>{
        setNasaData(response.data);
        // console.log(response.data)
      })
      .catch((error)=>{
        console.log('404!')
      });
    }
    fetchNasaData();
  }, []);


  return (

    <AppContainer className="App" >
      <Title title={nasaData}/> 
      <ShowMedia nasaData={nasaData}/>
      <Contents content={nasaData} date={nasaData} title={nasaData}/>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.body`
  background-color: #1a1c20;
  margin: 0 10%;
  font-family: 'sans-serif';
`