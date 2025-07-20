import {useStates} from "react";
function dosomething(){
   console.log("Welcome to Noida"); 

  }

 function howwer(){

console.log("You have howwered the text");

}
let [count,setCount]=useState(0);

let incCount=()=>{

setCount(count+1);
}



export default function Button() {
  return (
    <div>
      <button onClick={dosomething}>Click Me</button>
      <p onMouseOver={howwer}>
Try the AI text generator, a tool for content creation. It leverages a transformer-based Large Language Model (LLM) to produce text that follows the users instructions. As an AI generator, it offers a range of functions, from text generation, to completing sentences,
 </p>
    </div>
  );
}
