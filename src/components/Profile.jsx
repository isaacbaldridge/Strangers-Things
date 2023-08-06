import { Link } from "react-router-dom"

const Profile = ({token, user}) => {

if (token && user.posts) {
    const myPosts = user.posts
    console.log(myPosts)
    const myActivePosts = myPosts.filter((post) => post.active)
    console.log(myActivePosts)
    const myActivePostsMap = myActivePosts.map((post, index) => 
    <div key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.location}</h3>
        <p>{post.description}</p>
    <div>
        {post.messages.map((msg, index) =>
        <div key={index}>
            <h3>From: {msg.fromUser.username}</h3>
            <p>{msg.content}</p>
        </div>)}
    </div>
</div>)

const myMessagesMap = myActivePosts.map((post, index) => 
<div key={index}>
    <div>
        {post.messages.map((msg, index) => 
        <div key={index}>
            <h3>From: {msg.fromUser.username}</h3>
            <p>{msg.content}</p>
            <Link to={`/posts/${post._id}`}>VIEW MY POST: {post.title}</Link>
        </div>)}
    </div>
</div>)

return (
<div>
    <h1>Welcome, {user.username}</h1>
    <h2>My Posts:</h2>
    {myActivePostsMap}
    <h2>My messages:</h2>
    {myMessagesMap}
</div>)
 }
}

export default Profile