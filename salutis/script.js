let carrinho = [];

function adicionarProduto(produto) {
  let item = carrinho.find((p) => p.nome === produto);

  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({
      nome: produto,
      quantidade: 1,
    });
  }

  mostrarCarrinho();
  abrirCarrinho();
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");

  document.getElementById("overlay").style.display = "block";
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");

  document.getElementById("overlay").style.display = "none";
}

function mostrarCarrinho() {
  let lista = document.getElementById("listaCarrinho");

  lista.innerHTML = "";

  document.getElementById("contador").innerHTML = carrinho.length;

  carrinho.forEach((produto, index) => {
    lista.innerHTML += `

<div class="item-carrinho">

<h3>${produto.nome}</h3>

<p>
Quantidade:
${produto.quantidade}
</p>

<button onclick="diminuir(${index})">
-
</button>

<button onclick="aumentar(${index})">
+
</button>

<button onclick="remover(${index})">
Remover
</button>

</div>
`;
  });
}

function aumentar(index) {
  carrinho[index].quantidade++;

  mostrarCarrinho();
}

function diminuir(index) {
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade--;
  }

  mostrarCarrinho();
}

function remover(index) {
  carrinho.splice(index, 1);

  mostrarCarrinho();
}

function voltarProdutos() {
  document.getElementById("produtos").scrollIntoView();
}

function finalizarCompra() {
  let mensagem = "Olá, gostaria de solicitar um orçamento:%0A%0A";

  carrinho.forEach((produto) => {
    mensagem += `- ${produto.nome} x${produto.quantidade}%0A`;
  });
  mensagem += "%0AObrigado!";
  window.open("https://wa.me/5592991152359?text=" + mensagem);
}
