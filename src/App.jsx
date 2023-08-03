import { useState } from 'react'
import {Route, Routes, useNavigate } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Profile from "./components/Profile"
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Posts from "./components/Posts"
import './App.css'


function App() {

  const [ token, setToken ] = useState(null)
  const navigate = useNavigate()
  
  return (
    <div>
      <NavBar token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LogIn token={token} setToken={setToken} navigate={navigate}/>}/>
        <Route path="/register" element={<Register token={token} setToken={setToken} navigate={navigate}/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>

    </div>
  )
}

export default App
