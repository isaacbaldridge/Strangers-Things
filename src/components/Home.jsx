

const Home = ({token}) => {
    return (
        <div>Dummy home Component
            {token ? <p>you are logged in!</p> : <p>you are NOT logged in. get a job!</p>}
        </div>
    )
}

export default Home