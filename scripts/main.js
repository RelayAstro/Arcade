window.addEventListener("load", function () {

    /////////////////HOVER LISTADO/////////////////
    const btnNavegacion = document.querySelectorAll(".btnNavegacion");
    const iconBtn = document.querySelectorAll(".iconBtn");
    const titulo = document.querySelector(".titulo");
    const btnPlay = document.querySelector("#btnPlay");
    var posicionBtnNav = 0;

    for (let i = 0; i < btnNavegacion.length; i++) {
        btnNavegacion[i].addEventListener("mouseover", () =>{
            iconBtn[0].classList.add("oculto");
            iconBtn[1].classList.add("oculto");
            iconBtn[2].classList.add("oculto");
            iconBtn[3].classList.add("oculto");
            iconBtn[4].classList.add("oculto");
            iconBtn[i].classList.remove("oculto");
            posicionBtnNav = i;
            if(btnNavegacion[i].classList == "btnNavegacion"){
                document.getElementById('audioSeleccionMenu').play();
            }
        });
        btnNavegacion[i].addEventListener("mouseout", () =>{
            iconBtn[i].classList.add("oculto");
            btnNavegacion[0].classList.remove("selected");
            btnNavegacion[1].classList.remove("selected");
            btnNavegacion[2].classList.remove("selected");
            btnNavegacion[3].classList.remove("selected");
            btnNavegacion[4].classList.remove("selected");
            btnNavegacion[i].classList.add("selected");
        });
    };  
    /////////////////////////////////////////////// 

    /////////////////BOTON SONIDO//////////////////
    const btnAudio = document.querySelector(".btnAudio");
    const cancionMenu = document.getElementById("cancionMenu");
    const iconMute = document.querySelector(".mute");
    const iconDesmute = document.querySelector(".desmute");

    btnAudio.addEventListener("click", () => {
        btnAudio.classList.toggle("soundTrue");
        if(btnAudio.classList == "btnAudio soundTrue"){
            iconMute.classList.toggle("soundOculto");
            iconDesmute.classList.toggle("soundOculto");
            cancionMenu.play();
        }else{
            cancionMenu.pause();
            iconMute.classList.toggle("soundOculto");
            iconDesmute.classList.toggle("soundOculto");
        }
    })

    
    ///////////////////////////////////////////////  

    ///////////////////PARPADEO/////////////////// 
    let intervaloParpadeo = window.setInterval(btnParpadeo, 500);
    let intervaloParpadeoTitulo = window.setInterval(tituloParpadeo, 300);


    function btnParpadeo(){
     iconBtn[posicionBtnNav].classList.toggle("oculto");
    };

    function tituloParpadeo(){
        titulo.classList.toggle("colores");
        btnPlay.classList.toggle("playColor");
       };
    ///////////////////////////////////////////////
    

    ////////////////ANIO COPYRIGHT//////////////// 
    const anioActual = document.querySelector(".anio");

    anioActual.innerHTML = new Date().getFullYear();

    //////////////////////////////////////////////

});