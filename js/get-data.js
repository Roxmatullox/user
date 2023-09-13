function getData(url , callback) {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function (){
    if (xhr.readyState == 4) {
      let r = xhr.response
      let response = JSON.parse(r)
      callback(response)
    }
  }

  xhr.open("get",url)

  xhr.send()
}