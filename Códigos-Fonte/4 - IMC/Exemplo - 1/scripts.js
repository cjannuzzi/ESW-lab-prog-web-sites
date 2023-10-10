// Função para calcular o IMC
function calcularIMC() {
    // Pegando o valor inserido nos campos de peso e altura
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // Calculando o IMC: peso / (altura * altura)
    var imc = peso / (altura * altura);

    // Exibindo o IMC na tela
    // O método toFixed(2) é usado para formatar o número com duas casas decimais
    document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
}
