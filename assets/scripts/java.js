window.addEventListener("load",()=>{
    document.getElementById("bt").addEventListener("click",claro); 
    document.getElementById("texto").addEventListener("click",texto); 
});


function claro(){
    var botones = document.getElementsByClassName("boton");
    var titulo = document.getElementsByClassName("ti");
    var element = document.getElementById("body");
    var par = document.getElementsByClassName("p");
    var lab = document.getElementsByClassName("lab");
    element.classList.toggle("claro");
    for(var i = 0; i< botones.length; i++){
        botones[i].classList.toggle("claro")
    }
    for(var i = 0; i< titulo.length; i++){
        titulo[i].classList.toggle("claro")
    }
    for(var i = 0; i< par.length; i++){
        par[i].classList.toggle("claro")
    }
    for(var i = 0; i< lab.length; i++){
        lab[i].classList.toggle("claro")
    }
    
}

function texto(){}

