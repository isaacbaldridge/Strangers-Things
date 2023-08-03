import {Link} from "react-router-dom"

// import state, useNavigate share token and setToken prop
// ternary => if token, display Log out onClick, setToken(null), and navigate to Login page
// if token=(null), do not display Logout in Navbar

const NavBar = ({token, setToken}) => {

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