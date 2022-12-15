var Dialog = (function (){

    function setblur(doBlur){

        var tempELE = document.getElementById("MainContainer").children
        for (let index = 0; index < tempELE.length; index++) {
            let element = tempELE[index];
            if (doBlur == true) {
                element.className += " blur"
            } else {
                element.className = element.className.replaceAll(" blur",'')
            }
        }


    }


    return {
        ShowAlert:function (title,content){
            if(title == null){title= "Alert"}
            if (!content) {
             content = title
             title= "Alert"
            }
            if(document.getElementById("ALERT")){
               var ele = document.getElementById("ALERT");
            }else{
    
                var ele = document.createElement("div");
                ele.id = "ALERT"
            }
            ele.className = "Dialogs"
            // ele.style.left = (screen.width - ele.offsetWidth) + "px"
            // var TempHtml = 
            // TempHtml = "<h1>"+title+"<br>"+content+"</h1> <h3 onclick='"+   '(){document.getElementsByTagNameNS("*","body")[0].removeChild(  document.getElementById("ALERT"))';
            // TempHtml += 'MainContainer.className = MainContainer.className.replaceAll(" blur","")'+"}'>OK</h3>"
            ele.innerHTML = "<h1>"+title+"<br>"+content+"</h1>";
    
            // ele.appendChild(document.createElement("h1").innerHTML =  "<h1>"+title+"<br>"+content+"</h1> ")
            var ele2 = document.createElement("h3");
            ele2.innerHTML = "Ok";
            ele2.onclick = function(){
    
                document.getElementsByTagNameNS("*","body")[0].removeChild(  document.getElementById("ALERT"))
                setblur(false)
            }
            ele.appendChild(ele2)
            document.getElementsByTagNameNS("*","body")[0].appendChild(ele)
            ele.style.left = ((window.innerWidth/2) - (ele.offsetWidth/2)) + "px"
            ele.style.top = ((window.innerHeight/2) - (ele.offsetHeight/2)) + "px"
            setblur(true)
    
            // .addEventListener("click", myFunction);
    
        },  confirm: async function (text,callback){
          
            if(document.getElementById("CONFIRM")){
               var ele = document.getElementById("CONFIRM");
            }else{
    
                var ele = document.createElement("div");
                ele.id = "CONFIRM"
            }
            ele.className = "Dialogs"
            // ele.style.left = (screen.width - ele.offsetWidth) + "px"
            // var TempHtml = 
            // TempHtml = "<h1>"+title+"<br>"+content+"</h1> <h3 onclick='"+   '(){document.getElementsByTagNameNS("*","body")[0].removeChild(  document.getElementById("ALERT"))';
            // TempHtml += 'MainContainer.className = MainContainer.className.replaceAll(" blur","")'+"}'>OK</h3>"
            ele.innerHTML = "<h3>"+text+"</h3>";
    
            // ele.appendChild(document.createElement("h1").innerHTML =  "<h1>"+title+"<br>"+content+"</h1> ")
            var ele2 = document.createElement("h3");
            ele2.innerHTML = "Yes";
            ele2.onclick = function(){
    
                document.getElementsByTagNameNS("*","body")[0].removeChild(  document.getElementById("CONFIRM"))
                     setblur(false)
                callback(true);
            }
            
            ele.appendChild(ele2)
            ele2 = document.createElement("h3");
            ele2.innerHTML = "No";
            ele2.onclick = function(){
    
                document.getElementsByTagNameNS("*","body")[0].removeChild(  document.getElementById("CONFIRM"))
                     setblur(false)
                callback(false);
            }
            ele.appendChild(ele2)
            document.getElementsByTagNameNS("*","body")[0].appendChild(ele)
            // ele.style.width = (ele.offsetWidth + 20) +"px"
            ele.style.left = ((window.innerWidth/2) - (ele.offsetWidth/2)) + "px"
            ele.style.top = ((window.innerHeight/2) - (ele.offsetHeight/2)) + "px"
                setblur(true)
    
            // .addEventListener("click", myFunction);
    
        }
    }


})();

// let myFantasticJSLibrary = (function internalName(){
//     var myPrivateVar = 42;
    
//     return {
//         myPublicMethod : function() { return myPrivateVar; }
//     }
// })();



// Dialog.ShowAlert("HEY","heyyy")