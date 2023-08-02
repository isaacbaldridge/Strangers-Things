const COHORT_NAME = "2306-ftb-et-web-ft"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



export async function fetchPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json()
    //   console.log(result.data.posts)
      const postsArr = result.data.posts
      return postsArr
      
    } catch (err) {
      console.error(err)
    }
}

