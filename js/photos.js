
// var imgSRC = []
// var t = document.getElementsByTagName("img")
// for (let index = 0; index < t.length; index++) {
//     const ele =t[index].src;
//     if (ele.includes("https://cdn.pixabay.com")) {
//         imgSRC[imgSRC.length] = ele
//     }

// }

var Photos = {}
var PhotoPos = 0
const myRequest = new Request('./js/photos.json');
var SlideShowInt
fetch(new Request('./js/photos.json'))
    .then((response) => response.json())
    .then((data) => {
        // Photos = data
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            Photos[index] = document.createElement("img")
            Photos[index].src = data[index]
            Photos[index].style.display = "none";
            document.getElementById('SlideShowELE').appendChild(Photos[index])
            // console.log(data[index])
        }
        console.log(Photos.length)
     

    })
    .catch(console.error);
function SlideShow(state) {
    console.log(Object.keys(Photos).length)



        if (PhotoPos < Object.keys(Photos).length) {
            console.log(`{${new Date()}] - ${PhotoPos}`)
            if (PhotoPos == 0) {
                document.getElementById('SlideShowELE').children[PhotoPos].style.display = "block"
            } else {

                for (let index = 0; index < document.getElementById('SlideShowELE').children.length; index++) {
                    const element = document.getElementById('SlideShowELE').children[index];
                    document.getElementById('SlideShowELE').children[index].style.display = "none" 
                }

                document.getElementById('SlideShowELE').children[PhotoPos].style.display = "block"
                
            }
            // document.getElementById('SlideShowELE').innerHTML = "" 
            document.getElementById('SlideShowELE').appendChild(Photos[PhotoPos])
            PhotoPos++;
            // StartSlideShow()
        }


}