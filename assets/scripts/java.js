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

function texto(){
    var textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, label, a, span, button");
    textElements.forEach(element => {
        element.classList.toggle("grande");
        element.classList.toggle("mediano");
        element.classList.toggle("chiqui");
    });

    // Adicionalmente, para cambiar el tamaño del texto dentro de los párrafos, puedes seleccionar los párrafos directamente
    var paragraphs = document.getElementsByClassName("p");
    paragraphs.forEach(paragraph => {
        paragraph.classList.toggle("grande");
        paragraph.classList.toggle("mediano");
        paragraph.classList.toggle("chiqui");
    });
}

