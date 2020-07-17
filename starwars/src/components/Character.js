// Write your Character component here
import React from "react";
import styled, {keyframes} from "styled-components";



const kf = keyframes`
  0% {
    transform: scale(0);
    color: white;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.9;
    color: black;
  
  }
  100% {
    transform: scale(1) ;
    opacity: 1;
  }
`

const Styles = styled.div`

color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;
transform: scale(0);
animation: ${kf} 3s ease-in-out forwards;

.characters{
    // border: 2px green solid;
    width: 340px;
    display: flex;
    // padding: 0 20px;
    margin: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: rgba(0, 128, 0, 0.25);
    background: rgba(123,104,238, 0.55);
    // box-shadow: 5px 9px rgba(100, 20, 90, 0.40);
    border: 1px solid rgb(86, 180, 239);
    box-shadow: 0px 3px 3px rgba(20, 100, 30, 0.08) inset, 0px 0px 8px rgba(82, 168, 236, 10);
    
    p{
        background: rgba(216,191,216, 0.4);
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
  const { characters} = props;


    return(
        <Styles>
         
         {characters.map(item=>{
             return <div className="characters" key={item.name}>
               
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
