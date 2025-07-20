import {useState} from "react";

export default Likebu(){
let [isLiked,setIsLiked]=useState{false};

function clicked(){
   
 setIsLiked(!isLiked);

  }

return (
  
<div>
  <p onClick={clicked}>
   {isLiked?<i className=></i>:<i className=></i>}
</p>
</div>
   )

}