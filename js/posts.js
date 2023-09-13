let postsRow = document.querySelector(".posts-row")

function postsRes(el) {
  return `
    <div>
    <h3>${el.id}</h3>
    <h2>${el.title}</h2>
    <p>${el.body}</p>
    </div>
  `
}

let query = new URLSearchParams(location.search)

let userId1 = query.get("userId")

getData("https://jsonplaceholder.typicode.com/posts" , (res)=>{
  res.map((el)=>{
    if (el.userId == userId1) {
      console.log(el);
      postsRow.innerHTML += postsRes(el)
    }
  })
})