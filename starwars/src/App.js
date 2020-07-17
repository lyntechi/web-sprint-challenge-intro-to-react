import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components'
import Picture from './components/PICTURE'


const H1Styles = styled.h1`
font-size: 4rem;
color: white;
background: rgba(102, 51, 153, 0.6);
padding: 60px;
`


const App = () => {
  const[characters, setCharacters]=useState([])
  console.log(characters)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/')
    .then(response=>{
      setCharacters(response.data.results)
    })
    .catch(error=>{
      console.log('unsuccesful response from API', error)
    })
  },[])

  return (
    <div className="App">
      <H1Styles><span role="img" aria-label="emoji">🛸</span> REACT STAR WARS <span role="img" aria-label="emoji">🌠</span></H1Styles>
      <div className="pictureCharacter"><Picture />
      <Character characters={characters} setCharacters={setCharacters}/></div>
      
    </div>
  );
}

export default App;
