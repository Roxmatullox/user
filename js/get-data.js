function getData(url , callback) {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function (){
    if (xhr.readyState == 4 && xhr.status == 200) {
      let r = xhr.response
      let response = JSON.parse(r)
      callback(response , xhr.status )
    } else if(xhr.readyState == 4){
      callback(xhr.statusText , xhr.status)
    }
  }

  xhr.open("get",url)

  xhr.send()
}