
let appId ="appv1-a1b57"
let config = {
 apiKey: "AIzaSyDFjp8Suv5fIJ3ri2LFFtzw-muBB_t0PZ4",
    authDomain: "appv1-a1b57.firebaseapp.com",
    databaseURL: "https://appv1-a1b57-default-rtdb.firebaseio.com",
    projectId: "appv1-a1b57",
    storageBucket: "appv1-a1b57.appspot.com",
    messagingSenderId: "810011636842",
    appId: "1:810011636842:web:7298e686c3276a12bb8613",
    measurementId: "G-1NGQ0DJXPZ"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
    alert("hey")
}
this.database = firebase.database();
/*
function get() {

  let ref = database.ref('settings')
  

}*/
function get() {
  var starCountRef = database.ref("settings"); starCountRef.on('value', (snapshot) => { 
  const data = snapshot.val();
  document.body.innerHTML = JSON.stringify(data.Name)
  console.log(JSON.stringify(data.Name)) //updateStarCount(postElement, data); 
      });
}
get()