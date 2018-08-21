

var checkbuttons = document.getElementsByClassName("checkeable");


window.onload = function(){
    initEvents();
}



function initEvents(){
    for (let i = 0; i < checkbuttons.length; i++) {
        checkbuttons[i].addEventListener("click",function(e){check(e.target)});  
    }
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