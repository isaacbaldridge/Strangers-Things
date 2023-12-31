import Authenticate from "./Authenticate"
import { useState } from "react"
import {registerUser} from "../apiRequests"

const Register = ({token, setToken}) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        if (!errorMsg) {
            const data = await registerUser(username, password, confirmPassword)
            console.log(data)
            console.log(data.data.token)
            setToken(data.data.token)
            return token
        }
    }

    const usernameValidation = (event) => {
        let username = event.target.value
        if (username.length < 5) {
            setErrorMsg("Username must be greater than 5 characters.")
        } else {
            setErrorMsg("")
        }
        setUsername(username)
    }

    const passwordValidation = (event) => {
        let password = event.target.value
        if (password.length < 5) {
            setErrorMsg("Password too short")
        } else if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match")
        } 
        else {
            setErrorMsg("")
        }
        setPassword(password)
    }

    const confirmPasswordValidation = (event) => {
        let confirmPassword = event.target.value
        if (confirmPassword !== password) {
            setErrorMsg("Passwords do not match")
        } 
        else {
            setErrorMsg("")
        }
        setConfirmPassword(confirmPassword)
    }

    return (
        <div>
            <form className="register" onSubmit={handleSubmit}>
                <label>Username: 
                    <input value={username} onChange={usernameValidation} type="text"></input>
                </label>
                <label>Password: 
                    <input value={password} onChange={passwordValidation} type="password"></input>
                </label>
                <label>Confirm password: 
                    <input value={confirmPassword} onChange={confirmPasswordValidation} type="password"></input>
                </label>
                <button type="submit">Register</button>
            </form>
                { errorMsg && <h3>{errorMsg}</h3>}

            {token && (
                <div>
                    <Authenticate username={username} password={password}token={token} />
                </div>
            )}
        </div>
    )
}

export default Register