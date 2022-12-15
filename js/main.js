// alert(new Date())

var btnState = {

    // 'btn1':false
}


document.getElementById("btn1").addEventListener('click',function(){


if(btnState[this.id] == false){

    alert(this.id)
}else{

if (btnState[this.id] == true) {
    
} else {
    btnState[this.id] = false
}

}


})