import React, { useState } from 'react'

function ToggleDarkLight() {
// const [Toggle, setToggle] = useState(false);
const [bg, setbg] = useState("black");
const [col, setcol] = useState("white");
    function toggle(){
        if(bg==="white"){
            setcol("white");
            setbg("black");
            console.log(col);
        }
        else{
            setcol("black");
            setbg("white")
        }
    }
  return (
    <div style={{backgroundColor:bg,color:col , height: "100vh"}}>
     <button style={{backgroundColor:bg,color:col, padding: "10px 20px"}}  onClick={toggle}> Toggle Mode</button>
    hello
    </div>  
  )
}

export default ToggleDarkLight