

var checkbuttons = document.getElementsByClassName("checkeable");
// var email = document.getElementById("email");
// var pass = document.getElementById("password");
var fields = document.getElementsByTagName("input");
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var acceptBtn = document.getElementById("btn-accept");
var validateBtn = document.getElementById("btn-validate");
var url = "https://jsonplaceholder.typicode.com/users";
var errorMessaje = document.getElementById("error-messaje");
var loginError = document.getElementById("login-error");
var data;

window.onload = function(){
    initEvents();
    data = loadData();

}



function initEvents(){
    for (let i = 0; i < checkbuttons.length; i++) {
        checkbuttons[i].addEventListener("click",function(e){check(e.target)});  
    }

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('input', function(){ restoreInputClasses('animate')});
    }
    fields[0].addEventListener('blur',verifyEmail);
    validateBtn.addEventListener('click',logIn);
}

function restoreInputClasses(classes){
    event.target.className = classes;
 }

function check(element){

    var checkElement = element.parentNode;
    var card = checkElement.parentNode;

    if(checkElement.childNodes[1].value == "0"){
        card.className="card checked";
        checkElement.childNodes[1].value = "1";
    }
    else{
        card.className="card";
        checkElement.childNodes[1].value = "0";
    }
 
}
function logIn(){

    if(verifyEmptyFields()){
        if(verifyData(data)){
            acceptBtn.click();
        }
    }
}

function showErrorMessaje(msj){
    loginError.className="login-error";
    loginError.style.opacity = "1";
    errorMessaje.innerHTML= msj;
}

function hideErrorMessaje(){

}

function verifyEmptyFields(){
    var isValid = true;
    for (let i = 0; i < fields.length; i++) {
        if(fields[i].value==""){

            fields[i].className += " invalid";
            isWrong(fields[i]);
            isValid = false;
            showErrorMessaje("Fields can´t be empty");

        }  
    }
    return isValid;
}

function verifyEmail(){

    var isValid = true;

    if(emailRegex.test(fields[0].value)){
        fields[0].className += " valid";
        //add check
    }
    else{
        fields[0].className += " invalid";
        isWrong(fields[0]);
        isValid = false;
        showErrorMessaje("It´s not an email");
        
    }

    return isValid;
}

function shake(x,y,element){
    element.style.transform = "translate("+x+"px, "+y+"px)"
}

function isWrong(element){
    for(var i = 0 ; i <= 6 ; i++){
        setTimeout(shake,100*i,(i%2*2-1)*20,0,element );
        setTimeout(shake, 100 * 6, 0, 0,element);
    }
}

function verifyData(data){

    var isValid = true;
    var exist = false;
    for (let i = 0; i < data.length; i++) {
        var user =data[i];
        if(user.email==fields[0].value){

            exist= true;
            if(user.id==fields[1].value){
                //continue
            }
            else{
                fields[1].className += " invalid";
                isWrong(fields[1]);
                isValid = false;
                showErrorMessaje("Wrong password");
                

            }
        }
    }
    if(!exist){
        fields[0].className += " invalid";
        isWrong(fields[0]);
        isValid = false;
        showErrorMessaje("Email doesn´t exist");
        
    } 
    return isValid;
}

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
       }
      
    };
    xhttp.open("GET", url, true);
    xhttp.send(); 
}