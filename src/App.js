import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Title from './title.js'
import Picture from './picture.js'
import Content from './contents.js'



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
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Title title={nasaData}/> 
      <Picture media={nasaData}/>
      <Content content={nasaData} date={nasaData}/>
    </div>
  );
}

export default App;
