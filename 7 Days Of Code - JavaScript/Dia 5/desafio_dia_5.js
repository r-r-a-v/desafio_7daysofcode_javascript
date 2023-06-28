let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

alert("Bem Vindo à sua -LISTA DE COMPRAS-!")

let add = parseInt(prompt("Você deseja adicionar algum item na sua lista de compras? \n-Digite '1' para sim \n-Digite '0' para não"))

while (add !== 0 && add !== 1) {
    add = parseInt(prompt("Opção inválida! Por favor infome uma opcão válida!\n Você deseja adicionar algum item na sua lista de compras? \n-Digite '1' para sim \n-Digite '0' para não"))
}

while (add) {

    let categoria = parseInt(prompt("Informe a categoria do item: \n-Digite '1' para Frutas \n-Digite '2' para Laticínios \n-Digite '3' para Congelados \n-Digite '4' para Doces \n-Digite '5' para Outros"))

    while (categoria !== 1 && categoria !== 2 && categoria !== 3 && categoria !== 4 && categoria !== 5) {
        categoria = parseInt(prompt("Opção inválida! Por favor infome uma opcão válida!\n Informe a categoria do item: \n-Digite '1' para Frutas \n-Digite '2' para Laticínios \n-Digite '3' para Congelados \n-Digite '4' para Doces \n-Digite '5' para Outros"))
    }

    switch (categoria){
        case 1:
            frutas.push(prompt("Informe o nome do item:"))
            break;

        case 2:
            laticinios.push(prompt("Informe o nome do item:"))
            break;

        case 3:
            congelados.push(prompt("Informe o nome do item:"))
            break;

        case 4:
            doces.push(prompt("Informe o nome do item:"))
            break;

        case 5:
            outros.push(prompt("Informe o nome do item:"))
    }

    add = parseInt(prompt("Você deseja adicionar mais algum item? \n-Digite '1' para sim \n-Digite '0' para não"))

    while (add !== 0 && add !== 1) {
        add = parseInt(prompt("Opção inválida! Por favor infome uma opcão válida!\n Você deseja adicionar item na sua lista de compras? \n-Digite '1' para sim \n-Digite '0' para não"))
    }

}

alert(`-LISTA DE COMPRAS-\n  -Frutas: ${frutas}\n  -Laticínios: ${laticinios}\n  -Doces: ${doces}\n  -Congelados: ${congelados}\n  -Outros: ${outros}`);