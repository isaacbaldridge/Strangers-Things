import {loginUser} from "../apiRequests"
import { useState } from "react"

const LogIn = ({token, setToken, navigate}) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await loginUser(username, password)
        console.log(data)
        console.log(data.data.token)
        setToken(data.data.token)
        return navigate("/")
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
