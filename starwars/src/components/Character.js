// Write your Character component here
import React, {useState} from "react";
import styled from "styled-components";





const Styles = styled.div`

color: white;
display: flex;
flex-wrap: wrap;
margin-top: 50px;

 div:nth-child(10){
    margin: 0 auto;
 }
.characters{
    border: 2px white solid;
    width: 30%;
    display: flex;
    // padding: 0 20px;
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    p{
        background: rgba(100,280,80, 0.4);
        border-radius: 30px;
        padding: 5px;
        margin: 10px;
        
        
        
        
    }
    .characterDetails{
        align-self: center;
    }
    h2{
       
        margin-top: 25px;
        background: rgb(80, 220);
        width: 50%;
        
        
    }
 
  
}
`





function Character(props) {
  const { characters, setCharacters } = props;


    return(
        <Styles>
         {characters.map(item=>{
             return <div className="characters">
                 
                 <h2>Name: <br/> {item.name}</h2>
                 <div className="characterDetails"><p>Birth Year: {item.birth_year}</p>
                 <p>Eye Color: {item.eye_color}</p>
                 <p>Gender: {item.gender}</p></div>
             </div>
         })}

        </Styles>
    )




}

export default Character;
