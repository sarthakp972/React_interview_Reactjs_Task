import React, { useState } from 'react'

function ConditionalRendering() {
const [Login, setLogin] = useState(false);

function handle(){
    console.log(Login);
setLogin(Login=>!Login);
}

  return (
    <>
    <h1>ConditionalRendering</h1>
        <p>{Login?"You are Login":"You are not login"}</p> 
   <button onClick={handle}>{Login?"Logout":"Login"}</button>
    
    </>


  )
}

export default ConditionalRendering