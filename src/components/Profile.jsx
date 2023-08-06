import { Link } from "react-router-dom"

const Profile = ({token, user}) => {

if (token && user.posts) {
    const myPosts = user.posts
    const myActivePosts = myPosts.filter((post) => post.active)

    const myActivePostsMap = myActivePosts.map((post, index) => 
    <div className="activePosts"  key={index}>
        <h2>{post.title} | {post.price}</h2>
        <h3>{post.location}</h3>
        <p>{post.description}</p>
    <div>
        <h2>Messages:</h2>
        <hr/>
        {post.messages.map((msg, index) =>
        <div key={index}>
            <h3>From: {msg.fromUser.username}</h3>
            <p>{msg.content}</p>
            <hr/>
        </div>)}
    </div>
</div>)

const myMessagesMap = myActivePosts.map((post, index) => 
<div className="activePosts" key={index}>
    <div>
        {post.messages.map((msg, index) => 
        <div key={index}>
            <h3>From: {msg.fromUser.username}</h3>
            <p>{msg.content}</p>
            <Link to={`/posts/${post._id}`}>VIEW MY POST: {post.title}</Link>
            <hr/>
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