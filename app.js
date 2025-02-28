let numeroSecreto = 0;
let intentos = 1;
let listaNumeroAleatorio = [];
let numeroMaximo = 10 
console.log(numeroSecreto)
function asignacionDeTexto(elemento, texto){
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignacionDeTexto("p", `acertaste el numero secreto en ${intentos} ${(intentos == 1 ? "vez" : "veces")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
            if(numeroDeUsuario < numeroSecreto){
            asignacionDeTexto("p","el numero secreto es mayor");
            } else{
                asignacionDeTexto("p","el numero secreto es menor");
            }
        }
        intentos++;
        limpiarcaja();
    return;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroAleatorio == numeroMaximo){
        asignacionDeTexto("p", "Ya has alcanzado el limite de numeros posibles")
    }else{
        if (listaNumeroAleatorio.includes(numeroGenerado)){ 
            return generarNumeroSecreto();
    }else{ listaNumeroAleatorio.push(numeroGenerado)
        return numeroGenerado;}
}
    }

function limpiarcaja(){
    let valorcaja = document.querySelector("#valorUsuario");
    valorcaja.value = "";
}
function condicionesIniciales (){
    asignacionDeTexto('h1',"Juego del numero secreto");
    asignacionDeTexto('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1; 
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarcaja();
    //indicar mensaje de inicio
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales()
