let responseRow = document.querySelector(".response-row")

function responseUser(user) {
  return `
  <div class="user">
    <h3>${user.id} ${user.name}</h3>
    <h3>${user.username}</h3>
    <p>${user.email}</p>
    <a href= "posts.html?userId=${user.id}">Posts</a>
    <a href= "albums.html?userId=${user.id}">Albums</a>
  </div>
  `
}




let postsRow = document.querySelector(".posts-row")


getData("https://jsonplaceholder.typicode.com/users" , (res)=>{
  res.map((el)=>{
    responseRow.innerHTML += responseUser(el)
  })
})




