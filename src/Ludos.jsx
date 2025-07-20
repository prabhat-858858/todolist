import {useState}from "react";

export default function Ludo(){
  let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
  
  let updateblue=()=>{
  moves.blue+=1
  return setMoves({...moves});
}

let updategreen=()=>{
 moves.green+=1;
 return setMoves({...moves});
}

let updateyellow=()=>{
moves.yellow+=1;
return setMoves({...moves});
}

let updatered=()=>{
moves.red+=1;
return setMoves({...moves});
}

return (
     <div>
    <p>blue moves={moves.blue}</p>
    <button style={{backgroundColor:"blue"}}onClick={updateblue}>+1</button>
    <p>green moves={moves.green}</p>
    <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
    <p>yellow moves={moves.yellow}</p>
    <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
     <p>red moves={moves.red}</p>
    <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
   </div>
     );

  }
