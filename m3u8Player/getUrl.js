// document.body.innerHTML += '<script src="D:/Coding/Git/m3u8Player\getUrl.js"></script>'
// alert(new Date())
// console.log(document.getElementsByClassName("bottom")[0].children[0].children[0].innerText)
function doGetUrl(params) {
    var temp =[]
    var childrenE = document.getElementsByClassName("bottom")[0].children[0].children
    for (let index = 0; index < childrenE.length; index++) {
        const element = childrenE[index].innerText;
        // element = element.replace()
        temp[index] = { title:element,url:""}
    }
    console.log(temp)
}
doGetUrl()
