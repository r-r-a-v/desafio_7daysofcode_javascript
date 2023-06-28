let area = parseInt(prompt("Informe a área que deseja seguir: \n-Digite '1' para Front-End \n-Digite '2' para Back-End"))
let aprender = ""

while (area !== 1 && area !== 2) {
    area = parseInt(prompt("!!Opção inválida!! \n Por favor digite uma opção válida!"))
}

switch (area) {
    case 1:
        area = "Front-End"
        aprender =parseInt(prompt("Informe o framework que deseja aprender: \n-Digite '1' para React \n-Digite '2' para Vue"))

        while (aprender !== 1 && aprender !== 2) {
            aprender = parseInt(prompt("!!Opção inválida!! \n Informe o framework que deseja aprender: \n-Digite '1' para React \n-Digite '2' para Vue"))
        } 

        aprender = (1 ? "React" : "Vue")
        break;

    case 2:
        area = "Back-End"
        aprender = parseInt(prompt("Informe qual linguaguagem deseja aprender: \n-Digite '1' para C# \n-Digite '2' para Java"))

        while (aprender !== 1 && aprender !== 2) {
            aprender = parseInt(prompt("!!Opção inválida!! \n Informe qual linguaguagem deseja aprender: \n-Digite '1' para C# \n-Digite '2' para Java"))
        }

        aprender = (1 ? "C#" : "Java")
}

let espec = parseInt(prompt("Informe sua preferência: \n-Digite '1' para seguir se especializando na área escolhida \n-Digite '2' para seguir se desenvolvendo para se tornar Fullstack"))

while (espec !== 1 && espec !== 2) {
    espec = parseInt(prompt("!!Opção inválida!! \n Informe sua preferência: \n-Digite '1' para seguir se especializando na área escolhida \n-Digite '2' para seguir se desenvolvendo para se tornar Fullstack"))
}

espec = (1 ? "Você quer se especializar em" : "Você quer ser um desenvolvedor Fullstack e está estudando")

alert(espec + " " + area + " com a tecnologia " + aprender + "!")

let rept = parseInt(prompt("Você deseja se especializar em alguma outra tecnologia? \n-Digite '1' para Sim \n-Digite '0' para Não"))

while (rept !== 1 && rept !== 0) {
    rept = parseInt(prompt("!!Opção inválida!! \nVocê deseja se especializar em alguma outra tecnologia? \n-Digite '1' para Sim \n-Digite '0' para Não"))
}

while (rept) {
    let techno = parseInt(prompt("Qual tecnologia? \n1 - JavaScript \n2 - Python \n3 - C++ \n4 - Rust \n5 - Swift"))

    while (techno !== 1 && techno !== 2 && techno !== 3 && techno !== 4 && techno !== 5) {
        rept = parseInt(prompt("!!Opção inválida!! \nQual tecnologia? \n1 - JavaScript \n2 - Python \n3 - C++ \n4 - Rust \n5 - Swift"))
    }

    switch (techno) {
        case 1:
            alert("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.")
        break

        case 2:
            alert("Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.")
        break

        case 3:
            alert("C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.")
        break

        case 4:
            alert("Rust é uma linguagem de programação multiparadigma compilada desenvolvida pela Mozilla Research. É projetada para ser 'segura, concorrente e prática', mas diferente de outras linguagens seguras, Rust não usa coletor de lixo. Possui suporte nativo ao WebAssembly.")
        break

        case 5:
            alert("Swift é uma linguagem de programação desenvolvida pela Apple para desenvolvimento no iOS, macOS, watchOS, tvOS, Windows e Linux. Swift foi desenvolvida para manter compatibilidade com a API Cocoa e com código existente em Objective-C.")
        break
    }

    rept = parseInt(prompt("Deseja informar outra tecnologia? \n-Digite '1' para Sim \n-Digite '0' para Não"))

    while (rept !== 1 && rept !== 0) {
        rept = parseInt(prompt("!!Opção inválida!! \nDeseja informar outra tecnologia? \n-Digite '1' para Sim \n-Digite '0' para Não"))
    }

}
