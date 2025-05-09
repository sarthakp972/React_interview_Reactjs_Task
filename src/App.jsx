import React from 'react'
import TudoList from './Components/TudoList'
import Form from './Components/Form'
import Fetch from './Components/Fetch'
import ConditionalRendering from './Components/ConditionalRendering'
import ToggleDarkLight from './Components/ToggleDarkLight'
import SearchFilterList from './Components/SearchFilterList'
import FetchDataContextApi from './Components/FetchDataContextApi'
import Accordion from './Components/Accordion'
import GoogleInterface from './Components/GoogleInterface'
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from './Components/Home'
function App() {
  return (
    <>
  <BrowserRouter>
    <GoogleInterface/>
  <Routes>
    <Route path="/helo" element={<Home/>} />
  </Routes>
  </BrowserRouter>
    <div>
      {/* <TudoList/> */}
    {/* <Form/> */}
    {/* <Fetch/> */}
    {/* <ConditionalRendering/>
     */}
     {/* <ToggleDarkLight/> */}
     {/* <SearchFilterList/> */}
  {/* <FetchDataContextApi/> */}
  {/* <Accordion/> */}

    </div>
      </>
  )
}

export default App