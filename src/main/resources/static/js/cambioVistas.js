function mostrarInicial() {
    input = document.getElementById("text");
    boton1 = document.getElementById("botonArriba");
    boton2 = document.getElementById("botonAbajo");
    input.placeholder = "Username";
    input.value = ""
    boton1.style.display = "block"
    boton1.innerText = "Create Room"
    boton1.setAttribute("onclick","app.connectCreate()");
    boton2.style.display = "none"
}

function mostrarCreate() {
    input = document.getElementById("text");
    boton1 = document.getElementById("botonArriba");
    boton2 = document.getElementById("botonAbajo");
    input.placeholder = "Nombre Sala";
    input.value = ""
    boton1.innerText = "Create"
    boton1.setAttribute("onclick","app.crearSala(text.value)");
    boton2.innerText = "Back"
    boton2.style.display = "block"
    boton2.setAttribute("onclick","mostrarInicial()");
}

function mostrarJoin() {
    input = document.getElementById("text");
    input.style.display = "none"
    boton1 = document.getElementById("botonArriba");
    boton2 = document.getElementById("botonAbajo");
    boton1.style.display = "none"
    boton2.innerText = "Back"
    boton2.style.display = "block"
    boton2.setAttribute("onclick","mostrarInicial()");
}
function mostrarUnido() {
    input = document.getElementById("text");
    input.style.display = "none"
    boton1 = document.getElementById("botonArriba");
    boton2 = document.getElementById("botonAbajo");
    boton1.style.display = "none"
    boton2 = document.getElementById("botonAbajo");
    boton2.style.display = "block"
    boton2.innerText = "exit"
    boton2.setAttribute("onclick","app.salirSala()");
}