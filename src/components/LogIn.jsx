import Authenticate from "./Authenticate"
import {loginUser, myData} from "../apiRequests"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LogIn = ({token, setToken}) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await loginUser(username, password)
        console.log(data)
        console.log(data.data.token)
        setToken(data.data)
        // token ? return 
        return navigate("/profile")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: 
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"></input>
                </label>
                <label>Password: 
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
                </label>
                <button
                type="submit">Log In</button>
            </form>


        </div>
    )
}

export default LogIn




const Register = ({token, setToken}) => {
    const [ confirmPassword, setConfirmPassword ] = useState("")



    // console.log(username)
    // console.log(password)
    // console.log(confirmPassword)

    return (
        <div>

            {token && (
                <div>
                    <Authenticate username={username} password={password}token={token} />
                </div>
            )}
        </div>
    )
}