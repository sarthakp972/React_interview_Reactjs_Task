import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

function ThemeProvide({children}) {

    const [theme, setTheme] = useState("white");

    const toggleTheme=()=>{
        if(theme==="white"){
            setTheme("black");
        }
        else{
             setTheme("white"); 
        }
    }
  return (
 <ThemeContext.Provider value={{theme,toggleTheme}}>
{children}
 </ThemeContext.Provider>
  )
}

export default ThemeProvide