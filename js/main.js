var MyID = null;
var JobList;
let time;
var TempSecs = null
let PageTitle = "Home";
var Amt = 5;
function currentTime(Send, NewDate) {

  let date = new Date();

  if (NewDate) {
    date = NewDate
  }

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  // TempSecs = ss;
  if (TempSecs == null) {
    TempSecs = ss;
  }
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  time = hh + ":" + mm + " " + session;
  var displaytime = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementsByClassName("Clock")[0].innerText = displaytime;
  document.getElementsByClassName("Date")[0].innerText = date.toDateString();

  let t = setTimeout(function () { currentTime() }, (0.5 * 1000));

  if (Send) {
    return time
  } else {
    
    // doJobs()
  }

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
var PageHolder = document.getElementsByClassName('pageHolder')[0].children
for (let index = 0; index < PageHolder.length; index++) {
  const element = PageHolder[index];
  var TempClassName = element.className
  // var NewClassName = 
  console.log(element)
  if (element.id != (page)+"Page" ) {
    // TempClassName.replaceAll("NotCurrentPage", 'CurrentPage')
    element.className = 'NotCurrentPage'
  }

}
document.getElementById(page + "Page").className = 'CurrentPage'
  // // document.getElementsByClassName("CurrentPage")[0].style.display = 'none'
  // var CurrentPage = document.getElementsByClassName("CurrentPage")[0]
  // var NewPage = document.getElementById(page + "Page")
  // // document.getElementsByClassName("CurrentPage")[0].className.replaceAll("CurrentPage", 'NotCurrentPage')
  // CurrentPage.className.replaceAll("CurrentPage", 'NotCurrentPage')
  // // document.getElementById(page+"Page").style.display = "flex";
  // // document.getElementById(page + "Page").className.replaceAll("NotCurrentPage", 'CurrentPage')
  // NewPage.className.replaceAll("NotCurrentPage", 'CurrentPage')
  // console.log(NewPage)
  // navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // Vibrate 'SOS' in 

}

// function doJobs() {


//   if (JobList != null) {
//     for (let arrayPos = 0; arrayPos < JobList.length; arrayPos++) {
//       let ele = JobList[arrayPos];
//       // eval(ele.func);
//       // console.log(ele)

//       // eval(ele.func);
//       if (ele.DoAt.doType == "time") {
//         if (ele.DoAt.add.type == "min") {
//           var TempDate = new Date();
//           var TempNewDate
//           if (TempDate.getMinutes() == 59) {
//             TempNewDate = currentTime(true, new Date(TempDate.getFullYear(), TempDate.getMonth(), TempDate.getDate(), TempDate.getHours() + 1, 0, 0));

//           } else {
//             TempNewDate = currentTime(true, new Date(TempDate.getFullYear(), TempDate.getMonth(), TempDate.getDate(), TempDate.getHours(), TempDate.getMinutes() + ele.DoAt.add.amt, 0));

//           }
//           // console.log(TempNewDate)
//           // console.log(currentTime(true, TempDate))
//           if (currentTime(true, TempDate) == ele.DoAt.dateORtime) {
//             if (ele.done == false) {

//               eval(ele.func)


//               // JobList[arrayPos].done = true
//               JobList[arrayPos].DoAt.dateORtime = TempNewDate
//             } else {
//               // JobList[arrayPos].done = false
//             }

//           } else if (ele.DoAt.dateORtime == null) {

//             JobList[arrayPos].DoAt.dateORtime = TempNewDate

//           } else {

//           }
//         }
//       }

//       // JobList[arrayPos]

//     }
//   }

// }
// function GetJobs(params) {

//   fetch('./js/jobs.json', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     },
//   })
//     .then(response => response.json())
//     .then(response => JobList = response)
//   setTimeout(() => {
//     for (let arrayPos = 0; arrayPos < JobList.length; arrayPos++) {
//       let ele = JobList[arrayPos];
//       // eval(ele.func);
//       // console.log(ele)
//       if (ele.DoAt.doOnStart) {
//         // eval(ele.func);
//         if (ele.DoAt.add.type == "min") {
//           var TempDate = new Date();
//           var TempNewDate = currentTime(true)
//           // if (TempDate.getMinutes() == 59) {
//           //   TempNewDate = new Date(TempDate.getFullYear(), TempDate.getMonth(), TempDate.getDate(), TempDate.getHours() + 1, 0, 0);

//           // } else {
//           //   TempNewDate = new Date(TempDate.getFullYear(), TempDate.getMonth(), TempDate.getDate(), TempDate.getHours(), TempDate.getMinutes() + ele.DoAt.add.amt, 0);

//           // }
//           // console.log(TempNewDate == TempDate)
//           console.log(TempNewDate)
//         }
//         // JobList[arrayPos]
//       }
//     }
//   }, 250);



// }
// setTimeout(() => {
//   GetJobs()
// }, 500);