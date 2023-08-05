import { useState, useEffect } from "react"
import { fetchPosts, fetchTokenPosts, messagePost } from "../apiRequests"

const Posts = ({token, navigate, allPosts, setAllPosts}) => {

    const [message, setMessage] = useState("")
    const [postId, setPostId] = useState("")

    useEffect(() => {
        if (token === null) {
            const getFetchPosts = async() => {
                setAllPosts(await fetchPosts())
            }
            getFetchPosts()
        }
        else if (token !== null) {
            const getFetchTokenPosts = async() => {
                setAllPosts(await fetchTokenPosts(token))
            }
            getFetchTokenPosts()
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newMessageData = await messagePost(token, message, postId)
        console.log(newMessageData)
    }

    // console.log(allPosts)



    const noTokenPostsMap = allPosts.map((post, index) => <div key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.author.username}, {post.location}</h3>
        <p>{post.description}</p>
    </div>)
    
    const tokenPostsMap = allPosts.map((post, index) => <div key={index}>
        <h2 onClick={() => {navigate(`/posts/${post._id}`)}}>{post.title} | {post.price}</h2>
        <h3>{post.author.username} | {post.location}</h3>
        <p>{post.description}</p>
        {post.isAuthor
        ?
        <button
        onClick={() => {
            /*call a delete request funciton */
        }
    }>Delete</button>

    :

    <form onSubmit={() => {handleSubmit}}>
        <input type="text" onClick={()=>{setPostId(post._id)}} value={message} onChange={(e) => setMessage(e.target.value)}></input>
        <button type="submit">Message</button>
    </form>
    }
    </div>)

    // console.log(message)
    // console.log(postId)
    


    return (
        <div>
            {token
            ?
            <div>
                <p>you are logged in!</p>
                <button onClick={() => navigate("/createpost")}>New Post</button>
                {tokenPostsMap}
                {/* posts map here that display a delete button (only if isAuthor is true), display a message button (only if isAuthor is false) */}

            </div>
            :
            <div>
                <p>you are NOT logged in. get a job!</p>
                {/* posts map here that do not display delete or message buttons. just the vanilla info */}
                {noTokenPostsMap}
            </div>
            }

            </div>
    )
}

export default Posts