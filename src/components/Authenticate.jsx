import {myData} from "../apiRequests"

const Authenticate = ({username, password, token}) => {


    async function handleAuthenticate() {
        const data = await myData(token.token)
        console.log(data)
        // useNavigate to navigate to /profile
    }

    return (
        <div>
            <p>Please confirm that your information is correct to continue to profile.</p>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <button onClick={handleAuthenticate}>Confirm</button>
        </div>
    )
}

export default Authenticate