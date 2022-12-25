

var idleAMT = 30
var isIdle = false
let idleAPI = (function () {
    // var myPrivateVar = 42;
    var lastTouch = new Date();
    var LoopFunc = null
    // const date2 = new Date('12/15/2010');
    // const diffTime = Math.abs(date2 - lastTouch);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");
    function checkIdleTime(params) {
        const date2 = new Date();
        const diffTime = Math.abs(date2 - lastTouch);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


        if (Math.floor(diffTime / 1000) >= idleAMT) {

            document.getElementsByClassName('IdleHolder')[0].style.display = "flex"


        } else {
            // console.log((Math.floor(diffTime / 1000)) + " Seconds");
            console.log(Math.floor(diffTime / 1000)  + ":" + idleAMT);
        }
        // console.log(diffDays + " days");
    }

    const api_url = "https://quotes.rest/qod?language=en";

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data);
        document.getElementById("QoD").innerHTML = data.contents.quotes[0].quote +"<br><div id='QoDauthor'> - " +  data.contents.quotes[0].author  + "</div>"
        // document.getElementById("QoD").style.backgroundImage = "url(https://theysaidso.com/img/qod/qod-inspire.jpg)"
    }

    

    function startIdle() {
    getapi(api_url);

        lastTouch = new Date();
        if (LoopFunc == null) {


            document.addEventListener('click', function (params) {
                lastTouch = new Date();
                // console.log("yep")

                document.getElementsByClassName('IdleHolder')[0].style.display = "none"
            })

            LoopFunc = setInterval(() => {
                checkIdleTime()
            }, 750);
        }
    }


    return {
        init: startIdle
        // myPublicMethod : function() { return myPrivateVar; }
    }
})();
idleAPI.init()