import { useState, useEffect } from "react"
import { deletePost, fetchPosts, fetchTokenPosts } from "../apiRequests"

const Posts = ({token, navigate, allPosts, setAllPosts}) => {

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

    const deleteHandler = async (e) => {
        e.preventDefault()
        const deleteData = (await deletePost(token, postId))
        console.log("testing")
        console.log(deleteData)
        setAllPosts(await fetchTokenPosts(token))


    }
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
        <form onSubmit={deleteHandler}>
            <button
            onMouseEnter={() => setPostId(post._id)}
            onMouseLeave={() => setPostId("")}
            onClick={() => {deleteHandler}}>Delete</button>

        </form>
    :
    <button onClick={() => {navigate(`/posts/${post._id}`)}}>Message</button>
    }
    </div>)

    console.log(postId)
    


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