const d = document;
const textArea = d.querySelector(".miolo__campo");
const mensagem = d.querySelector(".resposta__instrucoes");
const respostaTitulo = d.querySelector(".resposta__titulo");
const respostaImg = d.querySelector(".caixa__resposta img");
const botaoCopiar = d.querySelector(".resposta__botao"); 

const chavecriptografica = {
    a: 'ai',
    e: 'enter',
    i: "imes",
    o: 'ober',
    u: 'ufat'
};

const chavedescriptografica = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
};

botaoCopiar.style.display = "none";

function btnEncriptar() {
    const textoInicial = criptografia(textArea.value);
    mensagem.textContent = textoInicial;
    respostaTitulo.style.display = "none";
    respostaImg.style.display = "none";  
    mensagem.style.display = "block";
    botaoCopiar.style.display = "block";
    textArea.value = "";
}

function btnDesencriptar() {
    const textoInicial = descriptografia(textArea.value);
    mensagem.textContent = textoInicial;
    respostaTitulo.style.display = "none";
    respostaImg.style.display = "none";
    mensagem.style.display = "block";
    botaoCopiar.style.display = "block";
    textArea.value = "";
}


function copiarTexto() {
    const textoParaCopiar = mensagem.textContent;
    navigator.clipboard.writeText(textoParaCopiar).catch(err => {
        console.error("Falha ao copiar o texto: ", err);
    });
}

botaoCopiar.addEventListener("click", copiarTexto);

function substituicao(letra) {
    return chavecriptografica[letra] || letra;
}

function criptografia(textoInicial) {
    let frase = textoInicial.toLowerCase();
    let segredo = '';
    for (let i = 0; i < frase.length; i++) {
        segredo += substituicao(frase[i]);
    }
    return segredo;
}

function descriptografia(textocriptografado) {
    let segredo = textocriptografado.toLowerCase();
    for (let key in chavedescriptografica) {
        let regex = new RegExp(key, 'g');
        segredo = segredo.replace(regex, chavedescriptografica[key]);
    }
    return segredo;
}
