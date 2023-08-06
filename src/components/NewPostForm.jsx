import {useState} from "react"
import { makePost } from "../apiRequests"
import { Link } from "react-router-dom"

const NewPostForm = ({token, navigate}) => {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState(0)
    const [ location, setLocation ] = useState("")
    const [ deliver, setDeliver ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postData = await makePost(token, title, description, price, location, deliver)
        console.log(postData)
        setTitle("")
        setDescription("")
        setPrice(0)
        setLocation("")
        setDeliver(false)
        navigate("/posts")

    }

    return (
        <div>
            {token ? (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </label>
                <label>Description
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                </label>
                <label>Price
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </label>
                <label>Location
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
                </label>
                <label>Willing to deliver?
                <input type="checkbox" value={deliver} onChange={() => setDeliver(current => !current)}></input>
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
            )
        :
        <div>
            To create a new post, you must either <Link to="/login">log in</Link> or <Link to="/register">register a new account</Link>.
        </div>
        }
        </div>
    )
}

export default NewPostForm