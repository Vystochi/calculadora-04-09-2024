function adicionarValor(valor) {
    document.getElementById('resultado').value += valor;
}

function calcular() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = eval(resultado);
}

function limpar() {
    document.getElementById('resultado').value = '';
}
