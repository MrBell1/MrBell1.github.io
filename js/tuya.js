var devices = {}
var TuyaReady = false;


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
                TempEle.innerHTML = element.name + "<br>" + element.status[0].value
                TempEle.style.border = "3px solid red"
                if (element.status[0].value) {
                    TempEle.style.border = "3px solid green"
                }
                document.getElementById("tuyaPage").appendChild(TempEle)
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
                document.getElementById(element.id + ":Basic").innerHTML = element.name + "<br>" + element.status[0].value
                if (element.status[0].value) {
                    document.getElementById(element.id + ":Basic").style.border = "3px solid green"
                }else{
                    document.getElementById(element.id + ":Basic").style.border = "3px solid red"
                }
                // console.log(element.name)
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
