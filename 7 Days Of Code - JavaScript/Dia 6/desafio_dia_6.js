let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

function exItem (lista) {

    alert("Esta é sua lista:\n" + lista)

    let escolha = prompt("Digite o nome do item que deseja excluir:").toUpperCase()

    let listaCop = [...lista]

    for (let i = 0; i < listaCop.length; i++) {
        listaCop[i] = listaCop[i].toUpperCase()
    }

    if (listaCop.includes(escolha)) {
        
        let index = listaCop.indexOf(escolha)

        lista.splice(index,1) 

        alert("Item excluído!")
    } else {
        alert("O item informado não existe na lista.")
    }

}
function altlist (alt) {
    alt = parseInt(prompt("Você deseja fazer alguma alteração na sua lista? \n-Digite '1' para Adicionar um Item \n-Digite '2' para Remover um Item\n -Digite '0' para Não fazer Alterações"))

    while (alt !== 0 && alt !== 1 && alt !== 2) {
        alt = parseInt(prompt("Você deseja fazer alguma alteração na sua lista? \n-Digite '1' para Adicionar um Item \n-Digite '2' para Remover um Item\n -Digite '0' para Não fazer Alterações"))
    }
}

alert("Bem Vindo à sua -LISTA DE COMPRAS-!")

let loop = parseInt(prompt("Você deseja adicionar algum item na sua lista de compras? \n-Digite '1' para sim \n-Digite '0' para não"))

while (loop !== 0 && loop !== 1) {
    add = parseInt(prompt("Opção inválida! Por favor infome uma opcão válida!\n Você deseja adicionar algum item na sua lista de compras? \n-Digite '1' para sim \n-Digite '0' para não"))
}

while (loop) {

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

    let alteracao = parseInt(prompt("Você deseja realizar alguma alteração?\n -Digite '1' para sim\n -Digite '0' para não"))

    while (alteracao !== 0 && alteracao !== 1) {
        alteracao = parseInt(prompt("Opção inválida! Por favor infome se deseja realizar alguma alteração?\n -Digite '1' para sim\n -Digite '0' para não"))
    }
    
    while (alteracao) {
          
        let add = parseInt(prompt("Qual alteração você deseja fazer? \n-Digite '1' para Adicionar um Item \n-Digite '2' para Remover um Item\n -Digite '0' para Não fazer Alterações"))
    
        while (add !== 0 && add !== 1 && add !== 2) {
            add = parseInt(prompt("-OPÇÃO INVÁLIDA-? Por favor informe qual alteração você deseja fazer\n-Digite '1' para Adicionar um Item \n-Digite '2' para Remover um Item\n -Digite '0' para Não fazer Alterações"))
        }

        switch (add) {
            case 1:
                loop = true
                alteracao = false
                break;
            
            case 2:
                let excluir = parseInt(prompt("Informe de qual lista deseja excluir o item: \n-Digite '1' para Frutas \n-Digite '2' para Laticínios \n-Digite '3' para Congelados \n-Digite '4' para Doces \n-Digite '5' para Outros"))

                while (excluir !== 1 && categoria !== 2 && categoria !== 3 && categoria !== 4 && categoria !== 5) {
                    excluir = parseInt(prompt("Opção inválida! Por favor infome uma opcão válida!\n Por favor informe de qual lista deseja excluir o item: \n-Digite '1' para Frutas \n-Digite '2' para Laticínios \n-Digite '3' para Congelados \n-Digite '4' para Doces \n-Digite '5' para Outros"))
                }
                
                switch (excluir) {

                    case 1:
                        exItem(frutas)
                        altlist(alteracao)
                        break;

                    case 2:
                        exItem(laticinios)
                        altlist(alteracao)
                        break;

                    case 3:
                        exItem(congelados)
                        altlist(alteracao)
                        break;

                    case 4:
                        exItem(doces)
                        altlist(alteracao)
                        break;

                    case 5:
                        exItem(outros)
                        altlist(alteracao)

                }
                break;

            case 0:
                loop = false
                alteracao = false
        }
    }
}

alert(`-LISTA DE COMPRAS-\n  -Frutas: ${frutas}\n  -Laticínios: ${laticinios}\n  -Doces: ${doces}\n  -Congelados: ${congelados}\n  -Outros: ${outros}`);