import { useEffect } from "react"
import { isLoggedIn } from "../apiRequests"

const Profile = ({token}) => {

    useEffect(() => {
        const getIsLoggedIn = async () => {
            const data = await isLoggedIn(token)
            console.log(data)
        }
        getIsLoggedIn()
    }, [])
    
    return (
        <div>Dummy Profile Component
            {token ? <p>you are logged in</p> : <p>you are NOT logged in</p>}
        </div>
    )
}

export default Profile