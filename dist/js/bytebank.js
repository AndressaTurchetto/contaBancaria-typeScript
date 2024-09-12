var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo) {
    elementoSaldo.textContent = saldo.toString();
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha os campos da transação!');
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação é invalida!');
        return;
    }
    elementoSaldo.textContent = saldo;
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
        isNOva: true,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
