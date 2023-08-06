import { useState } from 'react'
import {Route, Routes, useNavigate } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Profile from "./components/Profile"
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Posts from "./components/Posts"
import SinglePost from './components/SinglePost'
import NewPostForm from './components/NewPostForm'
import './App.css'


function App() {

  
  const [ token, setToken ] = useState(null)
  const [allPosts, setAllPosts] = useState([])
  const [user, setUser] = useState({})


  const navigate = useNavigate()

  console.log(token)
  return (
    <div>
      <NavBar token={token} setToken={setToken} user={user}/>
      <Routes>
        <Route path="/" element={<Home token={token}/>}/>
        <Route path="/profile" element={<Profile token={token} navigate={navigate} user={user} setUser={setUser}/>}/>
        <Route path="/login" element={<LogIn token={token} setToken={setToken} navigate={navigate}/>}/>
        <Route path="/register" element={<Register token={token} setToken={setToken} navigate={navigate}/>}/>
        <Route path="/posts" element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} token={token} navigate={navigate}/>}/>
        <Route path="/posts/:id" element={<SinglePost token={token} allPosts={allPosts}/>}/>

        <Route path="/createpost" element={<NewPostForm token={token} navigate={navigate}/>}/>
      </Routes>

    </div>
  )
}

export default App
