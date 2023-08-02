import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Profile from "./components/Profile"
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>

      </Routes>

    </div>
  )
}

export default App
