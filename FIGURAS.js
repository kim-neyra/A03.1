alert("¿Deseas continuar en la página?")

function triángulo() {
    var areaResultado = document.getElementById("areaResultado");
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);

    var area = b * h / 2;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}



function paralelogramo() {
    var areaResultado = document.getElementById("paralelogramo");
    var b = parseInt(document.getElementById("base1").value);
    var h = parseInt(document.getElementById("altura1").value);

    var area = b * h;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function rectángulo() {
    var areaResultado = document.getElementById("rectángulo");
    var b = parseInt(document.getElementById("base2").value);
    var h = parseInt(document.getElementById("altura2").value);

    var area = b * h;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function cuadrado(){
    var areaResultado = document.getElementById("cuadrado");
    var l = parseInt(document.getElementById("lado").value);

    var area = l * l;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function rombo(){
    var areaResultado = document.getElementById("rombo");
    var dv = parseInt(document.getElementById("dv").value);
    var dh = parseInt(document.getElementById("dh").value);

    var area = dv * dh / 2;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function cometa(){
    var areaResultado = document.getElementById("cometa");
    var dv = parseInt(document.getElementById("dv1").value);
    var dh = parseInt(document.getElementById("dh1").value);

    var area = dv * dh / 2;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function trapecio() {
    var areaResultado = document.getElementById("trapecio");
    var BM = parseInt(document.getElementById("BM").value);
    var bm = parseInt(document.getElementById("bm").value);
    var h = parseInt(document.getElementById("altura3").value);

    var area = (BM + bm) * h / 2;

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}


function circulo(){
    var areaResultado = document.getElementById("circulo");
    var radio = parseInt(document.getElementById("radio").value);

    var area = Math.PI * Math.pow(radio,2);

    areaResultado.innerHTML = "" + area;
    textResultado.value = area;
}