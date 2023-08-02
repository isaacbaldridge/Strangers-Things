import { useState, useEffect } from "react"
import { fetchPosts } from "../apiRequests"

const Posts = () => {

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const getFetchPosts = async() => {
            setAllPosts(await fetchPosts())
        }
        getFetchPosts()
    }, [])

    console.log(allPosts)

    const postsMap = allPosts.map((post, index) => <div key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.author.username}, {post.location}</h3>
        <p>{post.description}</p>
    </div>)
    


    return (
        <div>{postsMap}</div>
    )
}

export default Posts