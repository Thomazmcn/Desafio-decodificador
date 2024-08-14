///A letra "e" é convertida para "enter"
///A letra "i" é convertida para "imes"
///A letra "a" é convertida para "ai"
///A letra "o" é convertida para "ober"
///A letra "u" é convertida para "ufat"

let chavecriptografica = {
    a : 'ai',
    e : 'enter',
    i : "imes",
    o : 'ober',
    u : 'ufat'
};

function substituiçao(letra){
    if (letra in chavecriptografica){
        return chavecriptografica[letra];
    }
    else {
        return letra;
    }
}

function criptografia(texto){
    let frase = texto;
    let segredo = '';
    for (let i = 0; i < frase.length; i++) {
        segredo += substituiçao(frase[i]);
    }
    return segredo
}


let chavedescriptografica = {
    ai : 'a',
    enter : 'e',
    imes : 'i',
    ober : 'o',
    ufat : 'u'
};

function descriptografia(texto){
    let segredo = texto;
    for (let key in chavedescriptografica){
        let regex = new RegExp(key, 'g');
        segredo = segredo.replace(regex, chavedescriptografica[key]);
    }
    return segredo;
}

