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

postsRow.innerHTML = "Loading..."


let query = new URLSearchParams(location.search)

let userId1 = query.get("userId")

getData("https://jsonplaceholder.typicode.com/posts" , (res , status)=>{
postsRow.innerHTML = ""
  if (status == 200) {
    res.map((el)=>{
      if (el.userId == userId1) {
        console.log(el);
        postsRow.innerHTML += postsRes(el)
      }
    })
  } else {
    postsRow.innerHTML = res
  }
})