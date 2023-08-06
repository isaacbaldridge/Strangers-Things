import { useState, useEffect } from "react"
import { deletePost, fetchPosts, fetchTokenPosts } from "../apiRequests"

const Posts = ({token, navigate, allPosts, setAllPosts}) => {

    const [postId, setPostId] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

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

    const postMatches = (post, text) => {
        if (post.title.includes(text)
        ||
        post.description.includes(text)
        ||
        post.author.username.includes(text)
        ) {
            return true
        }

    }

    const filteredPosts = allPosts.filter((post) => postMatches(post, searchTerm))
    const postsToDisplay = searchTerm.length ? filteredPosts : allPosts
    console.log(postsToDisplay)

    const noTokenPostsToDisplayMap = postsToDisplay.map((post, index) => <div key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.author.username}, {post.location}</h3>
        <p>{post.description}</p>
        </div>)

    const tokenPostsToDisplayMap = postsToDisplay.map((post, index) => <div key={index}>
                <h2>{post.title} | {post.price}</h2>
        <h3>{post.author.username}, {post.location}</h3>
        <p>{post.description}</p>

        {token && post.isAuthor
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

    return (
        <div>
            <input type="text" placeholder="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            {token
            ?
            <div>
                <p>you are logged in!</p>
                <button onClick={() => navigate("/createpost")}>New Post</button>
                {searchTerm.length
                ?
                tokenPostsToDisplayMap
                :
                tokenPostsMap
                }
            </div>
            :
            <div>
                <p>you are NOT logged in. get a job!</p>
                {searchTerm.length
                ?
                noTokenPostsToDisplayMap
                :
                noTokenPostsMap
                }
            </div>
            }

            </div>
    )
}

export default Posts