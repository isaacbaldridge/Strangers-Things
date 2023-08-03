/*

    THINGS TO DO:
    1.) password restrictions/guidelines
    2.) password and confirm password must match
    3.) when displaying username and password back to user, make it so the password is hidden and will only be revealed on the click of a button
    4.) display thank you for signing up mesage

*/


import Authenticate from "./Authenticate"
import { useState, useEffect } from "react"
import {registerUser} from "../apiRequests"



const Register = ({token, setToken}) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await registerUser(username, password, confirmPassword)
        console.log(data)
        console.log(data.data.token)
        setToken(data.data)
        return token
        }


    // console.log(username)
    // console.log(password)
    // console.log(confirmPassword)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: 
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"></input>
                </label>
                <label>Password: 
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
                </label>
                <label>Confirm password: 
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"></input>
                </label>
                <button type="submit">Register</button>
            </form>

            {token && (
                <div>
                    <Authenticate username={username} password={password}token={token} />
                </div>
            )}
        </div>
    )
}

export default Register