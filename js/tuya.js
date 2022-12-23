var devices = {}
var TuyaReady = false;
var MyID = ((window.location + "")+":"+Math.floor(Math.random() * Math.floor(Math.random() * 100)))

function TuyaStart() {
    // console.log(new Date());
    if (TuyaReady == true) {
        // console.log(TuyaReady)
        for (let i = 0; i < Object.keys(devices).length; i++) {
            const element = devices['' + i];

            // console.log(element.name)

            if (element.category == "dj") {
                var TempEle = document.createElement('div')
                TempEle.id = element.id + ":Basic";
                TempEle.className = 'TuyaBasic';
                document.getElementById("tuyaPage").appendChild(TempEle)
                TempEle = document.getElementById(element.id + ":Basic")
                TempEle.innerHTML = element.name + "<br>" + element.status.switch_led
                TempEle.style.border = "3px solid red"
                if (element.status.switch_led) {
                    TempEle.style.border = "3px solid green"
                }
                // document.getElementById("tuyaPage").appendChild(TempEle)
            }


        }
    } else {// else {


        //     if (webSocket) {

        //         if (Object.keys(devices).length > 0) {
        //             TuyaReady = true




        //         }else{

        //             webSocket.send(' {"From":"Temp","type":"tuya","do":"GetDevices"}')

        //         }
        //     } else {
        //         TuyaReady = false
        //         setTimeout(() => {
        //             TuyaStart()
        //         }, 1250);

        //     }



        // }

        if (Object.keys(devices).length <= 0) {
            TuyaReady = false;
            if (webSocket) {
                webSocket.send(' {"From":"Temp","type":"tuya","do":"GetDevices"}')
            }

            setTimeout(() => {
                TuyaStart()
            }, 1250);

        } else {
            // console.log(new Date() + "|||");
            TuyaReady = true;
            TuyaStart()
        }
    }
}
// TuyaStart();
function TuyaUpdate() {
    if (Object.keys(devices).length > 0) {

        for (let i = 0; i < Object.keys(devices).length; i++) {
            const element = devices['' + i];
            // console.log(element.category)
            if (element.category == "dj") {
                var TempState = false
                // document.getElementById(element.id + ":Basic").innerHTML = element.name + "<br>" + element.status.switch_led
                if (element.status.switch_led) {
                    document.getElementById(element.id + ":Basic").style.border = "3px solid green"
                    TempState = 'ON'
                } else {
                    document.getElementById(element.id + ":Basic").style.border = "3px solid red"
                    TempState = "OFF"
                }
                // console.log(element.status.switch_led)
                document.getElementById(element.id + ":Basic").innerHTML = element.name// + "<div onclick='SwitchLED'>" + TempState+ "</div>"
                var TempEle = document.createElement("div")
                TempEle.id = element.id + ":switch"
                TempEle.innerHTML = TempState
                document.getElementById(element.id + ":Basic").appendChild(TempEle)
                TempEle = document.getElementById(element.id + ":switch")
                TempEle.addEventListener("click",function(){SwitchLED(element.id)})
             

            }


            // if (element.category == "dj") {
            //     var TempEle = document.createElement('div')
            //     TempEle.id = element.id + ":Basic";
            //     TempEle.className = 'TuyaBasic';
            //     TempEle.innerHTML = element.status[0].value
            //     document.getElementById("tuyaPage").appendChild(TempEle)
            // }


        }
    }
}
function SwitchLED(id){

    console.log(webSocket.send(' {"From":"'+MyID+'","type":"tuya","do":"Switch_dj","id":"'+id+'"}'))
}