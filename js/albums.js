let albumsRow = document.querySelector(".albums-row")

function albumsRes(el) {
  return `
  <div>
    <h3>${el.id}</h3>
    <h2>${el.title}</h2>
  </div>
  `
}

albumsRow.innerHTML = "Loading..."


let query = new URLSearchParams(location.search)
let userId1 = query.get("userId")

getData("https://jsonplaceholder.typicode.com/albums" , (res , status)=>{
  albumsRow.innerHTML = ""
  if (status == 200) {
    res.map((el)=>{
      if (el.userId == userId1) {
        albumsRow.innerHTML += albumsRes(el)
      }
    })
  } else {
    albumsRow.innerHTML = res
  }
})