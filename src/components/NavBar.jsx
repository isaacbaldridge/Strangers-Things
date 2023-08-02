import {Link} from "react-router-dom"

const NavBar = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
            <Link to="/posts">Posts</Link>

        </div>
    )
}

export default NavBar