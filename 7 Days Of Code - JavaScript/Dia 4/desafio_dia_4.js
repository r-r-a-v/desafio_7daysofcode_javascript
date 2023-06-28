let numeroA = 0
let numTent = 0

numeroA = parseInt(Math.random() * 10)
console.log(numeroA)

alert("Este é um jogo de ADIVINHAÇÃO!")
alert("Será sorteado um número entre 0 e 10, e você terá 3 tentativas para acertar! Será que você consegue achar o número antes das 3 tentativas acabarem?") 
alert("VAMOS LÁ!")

do {

    numTent = numTent + 1

    alert("Essa é a sua " + numTent + "ª tentativa.")
    let tent = parseInt(prompt("Escolha um número de 0 a 10:"))


    while (tent < 0 || tent > 10) {
        tent = parseInt(prompt("!!Número Inválido!! \nPor favor escolha um número de 0 a 10:"))
    }


    if (tent == numeroA) {

        alert("Parabéns! Você acertou o número sorteado!")
        break

    } else { 

        alert("Ops! Número errado.")

    }

} while (numTent < 3) 

alert("FIM DO JOGO!")
alert("O número sorteado era: " + numeroA)