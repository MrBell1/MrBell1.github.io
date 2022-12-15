

function SetPage(page,ele){

   var collection =  document.getElementsByClassName("BarBottem")[0].children;
    for (let i = 0; i < collection.length; i++) {
  var tEle = collection[i]
  tEle.className =""
}
ele.className ="selected"


}