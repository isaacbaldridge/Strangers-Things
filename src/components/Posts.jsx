import { useState, useEffect } from "react"
import { fetchPosts, fetchTokenPosts } from "../apiRequests"

const Posts = ({token, navigate}) => {

    const [allPosts, setAllPosts] = useState([])

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

    console.log(allPosts)

    const postsMap = allPosts.map((post, index) => <div key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.author.username}, {post.location}</h3>
        <p>{post.description}</p>
    </div>)
    


    return (
        <div>
            {token
            ?
            <div>
                <p>you are logged in!</p>
                <button onClick={() => navigate("/createpost")}>New Post</button>
                {/* posts map here that display a delete button (only if isAuthor is true), display a message button (only if isAuthor is false) */}

            </div>
            :
            <p>you are NOT logged in. get a job!</p>}
            {/* posts map here that do not display delete or message buttons. just the vanilla info */}

            {postsMap}</div>
    )
}

export default Posts