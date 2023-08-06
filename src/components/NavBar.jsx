import {Link} from "react-router-dom"

const NavBar = ({token, setToken, user}) => {

    return (
        <div>
            <span>Stranger's Things</span>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            
            {token && user &&
            <div>
                <Link to="/profile">Profile</Link>
                <Link onClick={() => {setToken(null)}} to="/login">Log out</Link>
                <span>Logged in as {`${user.username}`}</span>
            </div>
            }

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