import { useState, useEffect } from "react"
import {registerUser} from "../apiRequests"



const Register = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        await registerUser(username, password, confirmPassword)
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
        </div>
    )
}

export default Register