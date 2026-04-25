import React from 'react'
import Home from "./components/home/Home"
import { Routes , Route } from 'react-router-dom'
import Register from "./components/pages/Register/Register"
import Log_in_page from "./components/pages/Login/Log_in_page"
import Contact from './components/pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Log_in_page" element={<Log_in_page />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
 )
}

export default App
