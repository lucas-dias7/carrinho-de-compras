function adicionar() {
 // recuperar valores: nome do produto, qtd e valor.
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
console.log(`Nome do produto: ${nomeProduto}`);
console.log(`Valor Unitário: ${valorUnitario}`);
console.log(`A quantidade é: ${quantidade}`);
let preco = quantidade * valorUnitario;
console.log(`O preço é ${preco}`)














 // calcular o preço, o nosso subtotal
 // adicionar no carrinho
 // atualizar o valor total

}




function limpar() {
 
}