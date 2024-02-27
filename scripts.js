const MATRIZ_CODE = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
]
const campoInput = document.querySelector("#texto-a-procesar");
const campoOutput = document.querySelector("#texto-procesado");
//const munieco = document.querySelector("#munieco");
const munieco = document.getElementById("seccion-munieco");

function btnEncriptar(){
    const textoEncriptado = encriptar(campoInput.value);
    campoOutput.value = textoEncriptado;
    munieco.style.display = "none";
}

function encriptar(fraseNoEncriptada){
    for(let i=0; i < MATRIZ_CODE.length; i++){
        if(fraseNoEncriptada.includes( MATRIZ_CODE[i][0]) ){
            fraseNoEncriptada = fraseNoEncriptada.replaceAll(MATRIZ_CODE[i][0], MATRIZ_CODE[i][1]);
        }
    }
    return fraseNoEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(campoInput.value);
    campoOutput.value = textoDesencriptado;
}

function desencriptar(fraseEncriptada){
    for(let i=MATRIZ_CODE.length-1; i >= 0; i--){
        if(fraseEncriptada.includes( MATRIZ_CODE[i][1]) ){
            fraseEncriptada = fraseEncriptada.replaceAll(MATRIZ_CODE[i][1], MATRIZ_CODE[i][0]);
        }
    }
    return fraseEncriptada;
}
