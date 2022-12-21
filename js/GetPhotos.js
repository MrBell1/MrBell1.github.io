

// https://www.pexels.com/search/4k%20landscape%20wallpapers/?orientation=landscape
for (var i = 0; i < document.getElementsByClassName('Inline_container__eIP5n inline-ads').length; i++) { document.getElementsByClassName('Inline_container__eIP5n inline-ads')[i].innerHTML = "" }
var imgSRC = []
var t = document.getElementsByTagName("img")
for (let index = 0; index < t.length; index++) {
    ele = t[index].src;

    ele = ele.split("?")[0]


    if (ele.includes("https://images.pexels.com")) {
        if (ele.includes("photo")) {
            imgSRC[imgSRC.length] = ele
        }

    }

}