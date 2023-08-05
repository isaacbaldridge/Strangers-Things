import {useParams} from "react-router-dom"

const SinglePost = () => {

    const {id} = useParams()
    return (
        <div>
            single post: {id}
        </div>
    )

}

export default SinglePost