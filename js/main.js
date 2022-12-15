

function SetPage(page, ele) {

  var collection = document.getElementsByClassName("navBar")[0].children;
  for (let i = 0; i < collection.length; i++) {
    var tEle = collection[i].children[0]
    var TEMPVar = tEle.className
    console.log(tEle)
    // if (TEMPVar.includes("active")) {
    tEle.className = tEle.className.replaceAll("active", '')
    //   console.log(tEle.className)
    // } else {

    // }
  }
  ele.className = "active"


}