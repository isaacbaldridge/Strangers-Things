const COHORT_NAME = "2306-ftb-et-web-ft"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// const tokenHeader = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}



export async function fetchPosts() {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json()
      console.log(result.data.posts)
      const postsArr = result.data.posts
      return postsArr

    } catch (err) {
      console.error(err)
    }
}


export async function registerUser (username, password, confirmPassword)  {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
            confirmPassword: confirmPassword
          }
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
      
    } catch (err) {
      console.error(err);
    }
  }

  
  
  export async function loginUser (username, password) {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
        });
        const result = await response.json();
        // console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}


export async function myData (token) {
  try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result

    } catch (err) {
      console.error(err);
    }
  }

export async function isLoggedIn (token) {
    try {
        const response = await fetch(`${BASE_URL}/test/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

        const result = await response.json()
        console.log(result)
        return result

    } catch (err) {
        console.error(err)
    }
}

export async function makePost (token) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            post: {
              title: "My favorite stuffed animal",
              description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
              price: "$480.00",
              willDeliver: true
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
      }
}