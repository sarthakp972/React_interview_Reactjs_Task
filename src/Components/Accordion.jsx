import React, { useState } from 'react'

function Accordion() {

    let Faq=[{Q:"hello",A:"Lorem ipsum dolor sit amet."},{Q:"Lorem ipsum dolor sit amet.",A:"ss"},{Q:"Lorem ipsum dolor sit amet.",A:"dsdsd"},{Q:"sarthak",A:"Lorem ipsum dolor sit amet."}]
    const [Current, setCurrent] = useState(null);
   function handleclick(index){
            setCurrent(prev=>(prev==index?null:index));
   }

  return (
    <div style={{ width: "400px", margin: "auto" }}>
        { Faq.map((item,index)=>(

<div onClick={()=>handleclick(index)} key={index} style={{border:"2px solid gray",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" , marginBottom: "10px"}}>
          {item.Q}
                {
                    Current===index &&(
                       <div style={{width:"auto",height:"30px",border:"2px solid gray",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" ,margin:"10px"}}>
                            {item.A}    
                         </div>
                    )
                }
           
        </div>
        ))
        
        }
    </div>
  )
}

export default Accordion