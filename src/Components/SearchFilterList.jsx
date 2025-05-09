import React, { useState } from 'react'

function SearchFilterList() {
    const [show, setshow] = useState([]);
    const [input, setinput] = useState();
    const fakeData = [
        "Apple",
        42,
        "Banana",
        19,
        "Cherry",
        88,
        "Orange",
        7,
        "Grapes",
        100
      ];
      { show =fakeData.filter((e)=>
        e.toString().toLowerCase().includes(input.toLowerCase())
       )}


  return (
    <>

    <div> 
        <input    type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setinput(e.target.value)} style={{boxShadow:"5px 5px 5px black 0.5", outline:"none" , borderRadius:"50px"}}/>
       
          
          </div>
        

            <ul>

          
                 {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
                 
                    
        
    
           
          
               </>
  )
}

export default SearchFilterList