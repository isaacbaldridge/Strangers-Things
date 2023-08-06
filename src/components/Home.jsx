import { useEffect } from "react"
import { myData } from "../apiRequests"

const Home = ({token, user, setUser, navigate}) => {

    useEffect(() => {
        const getMyData = async () => {
            setUser(await myData(token))
            console.log("inside async in useEffect")
        }
        getMyData()
        console.log("useEffect after async")
        }, [])

    return (
        <div>
            <h1>Welcome to Stranger's Things</h1>
            {token && user.posts
            ?
            <div>
                <h2>Logged in as {`${user.username}`}</h2>
                <button onClick={() => {navigate("/profile")}}>View Profile</button>
            </div>
            :
            <p>you are NOT logged in. get a job!</p>}
        </div>
    )
}

export default Home