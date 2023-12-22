
let BotonNegro =
document.querySelector("#Negro")

let BotonMasInfo =
document.querySelector("#info")


let nombreColor =
document.querySelector("#nombreColor")

let FiatNegro=
document.querySelector("img")

let FiatRojo=
document.querySelector("img")

let FiatBlanco=
document.querySelector("img")

let BotonRojo =
document.querySelector("#Rojo")

let BotonBlanco =
document.querySelector("#Blanco")



BotonRojo.onclick =
function () {

FiatRojo.src =
"cronosRojo.png"
}



BotonBlanco.onclick =
function () {

FiatBlanco.src =
"cronosBlanco.png"
}

BotonNegro.onclick =
function () {

FiatNegro.src =
"cronosNegro.png"
}


BotonNegro.onmouseover=
function() {
    nombreColor.textContent ="NEGRO VULCANO"
}




BotonBlanco.onmouseover=
function() {
    nombreColor.textContent ="BLANCO ALASKA"
}


BotonRojo.onmouseover=
function() {
    nombreColor.textContent ="ROJO MONTECARLO"

}



BotonMasInfo.onclick=
function () {

    let Edad=
    Number(prompt("ingresa tu edad"))

    if (Edad >= 18) {
       prompt("ingresa tu correo")
       alert("brevemente nos comunicaremos")
    }else{
    alert("no puede solicitar informacion");
    }
}