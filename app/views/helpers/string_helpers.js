const toLower = function(text) {
    return text.toLowerCase();
}

const toUpper = function(text) {
    return text.toUpperCase();
}

const radio_select = (valor, campo) => {

    return (valor == campo) ? "checked" : "";

}

const hasError = (erros, campo) => {

    var classe = "";

    if (erros)

        erros.forEach(erro => {

            if (erro.path == campo)
                classe = "is-invalid";
            
        });

    
    return classe;

}

const getError = (erros, campo) => {

    var mensagem = "";

    if (erros)

        erros.forEach(erro => {

            if (erro.path == campo)
                mensagem = erro.message;
            
        });

    return mensagem;

}

const index = function(valor) {
    return valor + 1;
}

module.exports = { toUpper, toLower, radio_select, hasError, getError, index };