window.onload = principal;

function principal()
{
    //Esto es un comentario de prueba para probar el commit
    document.getElementById("miBotonSuma").onclick = manejadorClickSuma;
    document.getElementById("miBotonResta").onclick = manejadorClickResta;
    document.getElementById("miBotonMul").onclick = manejadorClickMul;
    document.getElementById("miBotonDiv").onclick = manejadorClickDiv;
}

function manejadorClickSuma()
{
    let suma=parseFloat(document.getElementById("entrada").value)+parseFloat(document.getElementById("entrada2").value);
    
    document.getElementById("salida").innerHTML =
    "La suma es: " + suma;
}

function manejadorClickResta()
{
    //Esto es un comentario de prueba para probar el commit
    let resta=parseFloat(document.getElementById("entrada").value)-parseFloat(document.getElementById("entrada2").value);
    
    document.getElementById("salida").innerHTML =
    "La resta es: " + resta;
}

function manejadorClickMul()
{
    let mul=parseFloat(document.getElementById("entrada").value)*parseFloat(document.getElementById("entrada2").value);
    
    document.getElementById("salida").innerHTML =
    "La multiplicacion es: " + mul;
}

function manejadorClickDiv()
{
    let div=parseFloat(document.getElementById("entrada").value)/parseFloat(document.getElementById("entrada2").value);
    
    document.getElementById("salida").innerHTML =
    "La division es: " + div;
}
