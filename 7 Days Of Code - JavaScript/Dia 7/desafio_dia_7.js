let loop = true
let numA = 0
let numB = 0

function opSoma(a,b) {
    let conta = (a + b)
    alert("A soma de " + a + " e " + b + " é igual a " + conta + "!")
}

function opSub(a,b) {
    let conta = (a - b)
    alert("A subtração de " + a + " e " + b + " é igual a " + conta + "!")
}

function opMulti(a,b) {
    let conta = (a * b)
    alert("A multiplicação de " + a + " e " + b + " é igual a " + conta + "!")
}

function opDiv(a,b) {
    let conta = (a / b)
    alert("A divisão de " + a + " e " + b + " é igual a " + conta + "!")
}

alert("Bem Vindo à -CALCULADORA-!")

do {

    let operação = parseInt(prompt("Qual operação deseja utilizar?\n -Digite '1' para SOMA\n -Digite '2' para SUBTRAÇÃO\n -Digite '3' para MULTIPLICAÇÃO\n -Digite '4' para DIVISÃO\n -Digite '5' para SAIR"))
    
    while (operação !== 0 && operação !== 1 && operação !== 2 && operação !== 3 && operação !== 4 && operação !== 5) {
        operação = parseInt(prompt("-OPERAÇÃO INVÁLIDA-\n Por favor informe qual operação deseja utilizar?\n -Digite '1' para SOMA\n -Digite '2' para SUBTRAÇÃO\n -Digite '3' para MULTIPLICAÇÃO\n -Digite '4' para DIVISÃO\n -Digite '5' para SAIR"))
    }
    
    if (operação !== 5){
    numA = parseFloat(prompt("Informe o primeiro número:"))
    numB = parseFloat(prompt("Informe o segundo número:"))
    }

    switch (operação) {
        case 1:
            opSoma(numA,numB)
            break;

        case 2:
            opSub(numA,numB)
            break;

        case 3:
            opMulti(numA,numB)
            break;

        case 4:
            opDiv(numA,numB)
            break;

        case 5:
            loop = false
    }
    
    if (loop !== false) {

        loop = parseInt(prompt("Você deseja fazer mais alguma operação?\n -Digite '1' para Sim\n -Digite '0' para Não"))

        while (loop !== 1 && loop !== 0) {
            loop = parseInt(prompt("-OPÇÃO INVÁLIDA-\n Você deseja fazer mais alguma operação?\n -Digite '1' para Sim\n -Digite '2' para Não"))
        }
    }

} while (loop)

alert("Até a proxima!")