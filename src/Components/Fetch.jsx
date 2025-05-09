import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/").then(res=>res.json()).then(data=>{
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <div>
        { data.length>0 && 
           data.map((item)=> (<li key={item.id}>
            <div style={{display:"flex",flexDirection:"row"}}>
            <p>  {item.id}</p>
            <div>={item.title}</div>
          
            </div>
         
               </li>)
        )
   

        }

    </div>
  )
}

export default Fetch