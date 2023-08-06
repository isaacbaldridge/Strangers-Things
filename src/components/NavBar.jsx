import {Link} from "react-router-dom"


const NavBar = ({token, setToken, user}) => {


    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            
            {token && (
                <div>
                    <Link to="/profile">Profile</Link>
                    
                    <Link onClick={() => {
                        setToken(null)
                    }} to="/login">Log out</Link>
                    {/* <p>Logged in as {`${user.username}`}</p> */}
                </div>
            )}

            {!token && (
                <div>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Register</Link>
                </div>

            )}


        </div>
    )
}

export default NavBar