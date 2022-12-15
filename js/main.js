var MyID = null
let socket = new WebSocket("ws://10.1.1.239:8000");
socket.onopen = function(e) {
  // alert("[open] Connection established");
  // alert("Sending to server");
  socket.send("GetID");
};

socket.onmessage = function(event) {
  // alert(`[message] Data received from server: ${event.data}`);
  var TempData =event.data
  // // t = JSON.parse(t)
  // console.log(t)
  if(TempData.includes("SetID")){
    // alert(TempData)
    if (MyID == null) 
    {
      MyID = TempData.split(":")[1]
    }
  }
};

socket.onclose = function(event) {
  setTimeout(function(){socket = new WebSocket("ws://10.1.1.239:8000")},1000)
  if (event.wasClean) {
    // alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    // alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  // alert(`[error]`);
  // setTimeout(function(){socket = new WebSocket("ws://10.1.1.239:8000")},1000)
};

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
  //  let time = hh + ":" + mm +  " " + session;
  let time = hh + ":" + mm + ":" + ss + " " + session;

   document.getElementsByClassName("Clock")[0].innerText = time; 
   document.getElementsByClassName("Date")[0].innerText = date.toDateString();
   
  let t = setTimeout(function(){ currentTime() }, (0.5*1000));
}
currentTime();
function SetPage(page, ele) {

  var collection = document.getElementsByClassName("navBar")[0].children;
  for (let i = 0; i < collection.length; i++) {
    var tEle = collection[i].children[0]
    var TEMPVar = tEle.className
    // console.log(tEle)
    // if (TEMPVar.includes("active")) {
    tEle.className = tEle.className.replaceAll("active", '')
    //   console.log(tEle.className)
    // } else {

    // }
  }
  ele.className = "active";
  // document.getElementsByClassName("CurrentPage")[0].style.display = 'none'
  document.getElementsByClassName("CurrentPage")[0].className = ''
  // document.getElementById(page+"Page").style.display = "flex";
  document.getElementById(page+"Page").className += 'CurrentPage'
  
  // navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // Vibrate 'SOS' in 

}