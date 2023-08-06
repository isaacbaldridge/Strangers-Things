// add function to back button


import { messagePost } from "../apiRequests"
import { useState } from "react"
import {useParams} from "react-router-dom"

const SinglePost = ({allPosts, token, navigate}) => {
    const [message, setMessage] = useState("")

    const {id} = useParams()
    const singlePost = allPosts.find((post) => post._id === id)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newMessageData = await messagePost(token, message, id)
        console.log(newMessageData)
        setMessage("")
    }

    console.log(singlePost.isAuthor)
    console.log(message)
    console.log(singlePost.messages)

    return (
        <div>
            {token
            ?
            <div>
                <h2>{singlePost.title} | {singlePost.price}</h2>
                <h3>{singlePost.author.username}, {singlePost.location}</h3>
                <p>{singlePost.description}</p>

                {!singlePost.isAuthor
                ?
                <form onSubmit={handleSubmit}>
                    <textarea cols="40" rows="5"
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                    
                    <button type="submit">Send message</button>
                </form>
                :
                <div>
                    <h2>My messages:</h2>
                    {singlePost.messages.map((msg, index) => <div key={index}>
                        <h3>From: {msg.fromUser.username}</h3>
                        <p>{msg.content}</p>
                    </div>)}
                </div>
                }
            </div>
            :
            <div>
                You must log in or register to message other users about their posts.
                <button onClick={()=>{navigate("/login")}}>Log in</button>
                <button onClick={()=>{navigate("/register")}}>Register</button>
            </div>
            }
            <button onClick={()=> {navigate("/posts")}}>Back</button>
            single post: {id}
        </div>
    )

}

export default SinglePost