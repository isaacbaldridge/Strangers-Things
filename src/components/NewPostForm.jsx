

const NewPostForm = () => {

    return(
        <div>
            <form>
                <label>Title
                    <input></input>
                </label>
                <label>Description
                    <input></input>
                </label>
                <label>Price
                    <input></input>
                </label>
                <label>Location
                    <input></input>
                </label>
                <label>Willing to deliver?
                <input type="checkbox"></input>
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default NewPostForm