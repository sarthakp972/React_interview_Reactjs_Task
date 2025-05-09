import React, { useState } from 'react'

function Form() {
 
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

            function handleButton(){
                if(email.trim()!==""&& name.trim()!=="" && phone.trim()!==""&&password.trim()!==""){
                 const checkE=(email.includes("@") && email.includes("."))
                 console.log(checkE)
                 const checkP=(phone.length == 10);
console.log(checkP)
const Checkpass = (
    /\d/.test(password) &&
    /[a-z]/.test(password) &&
    /[,@#$%]/.test(password) &&
    /[A-Z]/.test(password) &&
    password.length >= 6          // minimum length
  );
  

              console.log(Checkpass);
                    if(checkE && checkP && Checkpass){
                        alert("Form submitted");
                        setemail(" ")
                        setname(" ")
                        setpassword(" ")
                        setphone(" ")
                    }
                    else{
                        alert("somthing went wrong");
                    }

                }
                else{
                    alert("Your all filed is must to fill ");
                }


            }



  return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>

        <label htmlFor="">Phone</label>
        <input type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>

        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>

        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button onClick={handleButton}>Button</button>
    </div>
  )
}

export default Form