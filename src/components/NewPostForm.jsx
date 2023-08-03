// import state for the five input fields and set them up to update along with the value of the input box
// follow login form format for help
// call the makePost async function and pass token and the five values over to it so it can populate the request in apiRequests.js
// if user somehow gets to this page and they are not logged in, provide link to sign-up or login page. (do ternary to conditionally render between that and the actual form)

import {useState} from "react"
import { makePost } from "../apiRequests"

const NewPostForm = ({token}) => {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState(0)
    const [ location, setLocation ] = useState("")
    const [ deliver, setDeliver ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postData = await makePost(token, title, description, price, location, deliver)
        console.log(postData)
    }


    // console.log(title)
    // console.log(description)
    // console.log(price)
    // console.log(location)
    // console.log(deliver)
    return(
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
}

export default NewPostForm