import React, { useState } from 'react'

function TudoList() {

const[input,SetInput]=useState("")
const[toodo,SetToodo]=useState([])


function handledelete(e){
// console.log(id);
const arr=toodo.filter((element)=>element.id!==e);
SetToodo(arr);

}

function handleupdate(item,e){
    const arr=toodo.filter((element)=>element.id!==e);
   
let v=prompt("update the value" , item);
console.log(v);
const p={
    id:e,
    title:v,
}
const pk=([...arr,p]);
SetToodo(pk);
}



function handleInput(e){
    SetInput(e.target.value)
}
function handleButton(){

    const sarthak={
        id:Date.now(),
        title:input.trim(),
      
    }

    if(sarthak.title!==""){
        SetToodo([...toodo,sarthak])
        SetInput("")
    }
    


}

  return (
    <>
       <div>
        <input type="text" value={input} onChange={handleInput}/>
        <button onClick={handleButton}>Add</button>

    </div>

    <div>
        {toodo.map((item)=>(
            <li key={item.id}>
                <div>{item.id}</div>
             
                    <div>{item.title}</div>
                    <button onClick={()=>handledelete(item.id)}>Delete</button>
                    <button onClick={()=>handleupdate(item.title,item.id)}>Update</button>

            </li>
        ))}
    </div>
    </>
 
  )
}

export default TudoList