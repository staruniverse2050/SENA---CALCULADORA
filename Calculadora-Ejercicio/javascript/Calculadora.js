var screen = document.querySelector('#display');

function Borrar() {
    document.getElementById("display");
    location.reload()
}

function mostrar(value) {
    const operaciones = ['* ', '+ ', '- ', '/ ', 'Raiz', 'sin ', 'cos ', 'tan '];

    screen.value = value;
    if (operaciones.includes(value)) {
        screen.value = screen.value + value;
    }


}
var cantidad = "";
var sumatoria = 0;
var senon = false;
var cosenon = false;
var tangenten = false;
var Raizo = false;



function mostrar(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}


function coseno() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    cosenon = true;
}

function seno() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    senon = true;
}

function tangente() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    tangenten = true;
}

function Raiz() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    Raizo = true;
}

function Igual() {
    screen.value = eval(screen.value);

    if (cosenon) {
        document.getElementById("display").value = Math.cos(cantidad * Math.PI / 180)
    }
    if (senon) {
        document.getElementById("display").value = Math.sin(cantidad * Math.PI / 180);

    }
    if (tangenten) {
        document.getElementById("display").value = Math.tan(cantidad * Math.PI / 180);

    }
    if (Raizo) {
        document.getElementById("display").value = Math.sqrt(cantidad);

    }
}