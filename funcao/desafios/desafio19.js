// 19) O cardápio de uma lanchonete é o seguinte:
// Código | Descrição do Produto | Preço
// 100  |   Cachorro Quente |   R$ 3,00
// 200  |   Hambúrguer Simples | R$ 4,00
// 300  | Cheeseburguer     | R$ 5,50
// 400  | Bauru     |   R$ 7,50
// 500  | Refrigerante  | R$ 3,50
// 600  |   Suco    |   R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function pedido(codigoItem, qtdItem){
    switch(codigoItem){
        case 100:
            console.log(`Cachorro quente - R$3,00 UN \n${qtdItem} unidades dá um total R$${(qtdItem*3).toFixed(2)}\n`)
            break;
        case 200:
            console.log(`Hambúrguer simples - R$4,00 UN \n${qtdItem} unidades dá um total R$${(qtdItem*4).toFixed(2)}\n`)
            break;
        case 300:
            console.log(`Cheeseburguer - R$5,50 UN \n${qtdItem} unidades dá um total R$${(qtdItem*5.5).toFixed(2)}\n`)
            break;
        case 400:
            console.log(`Bauru - R$7,50 UN \n${qtdItem} unidades dá um total R$${(qtdItem*7.5).toFixed(2)}\n`)
            break;
        case 500:
            console.log(`Refrigerante - R$3,50 UN \n${qtdItem} unidades dá um total R$${(qtdItem*3.5).toFixed(2)}\n`)
            break;
        case 600:
            console.log(`Suco - R$2,80 UN \n${qtdItem} unidades dá um total R$${(qtdItem*2.8).toFixed(2)}\n`)
            break;
        default:
            console.log('Produto informado não existe\n')
    }
}

pedido(100, 2)
pedido(400, 1)
pedido(600, 3)
pedido(800, 2)