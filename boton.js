const hazAlgo = document.getElementById("elBoton");
const hazOtraCosa = document.getElementById("otroBoton");
const hazUnaCosaMas = document.getElementById("tercerBoton")
const parrafo1 = document.getElementById("parrafo1")
const parrafo2 = document.getElementById("parrafo2")
const parrafo3 = document.getElementById("parrafo3")

hazAlgo.onclick = function () {
 document.body.style.backgroundColor = "#00ff0d";
 parrafo1.style.color="pink"
}
hazOtraCosa.onclick = function (){
 document.body.style.backgroundColor = "#ff0000";
 parrafo2.style.color="green"
}
hazUnaCosaMas.onclick = function (){
 document.body.style.backgroundColor = "#d400ff";
 parrafo3.style.color="blue"
}