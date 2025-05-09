import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function FetchDataContextApi() {
const {theme,toggleTheme}=useContext(ThemeContext);
console.log(theme);


  return (
    <div >
<button onClick={toggleTheme}>Toggle</button>
<p style={{backgroundColor:(theme=="white"?"white":"black"),color:(theme=="white"?"black":"white")}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ipsa.</p>
    </div>
  )
}

export default FetchDataContextApi