let totalGeral = 0;

function adicionar() {
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;
let preco = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
  <section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`;
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = '';

}

function limpar() {
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
  document.getElementById('quantidade').value = '';
  totalGeral = 0;
}




 // recuperar valores: nome do produto, qtd e valor.
 // calcular o preço, o nosso subtotal
 // adicionar no carrinho
 // atualizar o valor total
 // limpar carrinho

