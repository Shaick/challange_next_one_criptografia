const textArea = document.querySelector(".areatexto");
const mensagem = document.querySelector(".mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(textoEncripto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncripto = textoEncripto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncripto.includes(matrizCodigo[i][0])) {
            textoEncripto = textoEncripto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncripto;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(textoDesencripto) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencripto = textoDesencripto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoDesencripto.includes(matrizCodigo[i][1])) {
            textoDesencripto = textoDesencripto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencripto;
}

