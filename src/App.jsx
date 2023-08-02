import { useState } from 'react'
import {Route, Routes} from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Profile from "./components/Profile"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import Posts from "./components/Posts"
import './App.css'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/posts" element={<Posts/>}/>

      </Routes>

    </div>
  )
}

export default App
