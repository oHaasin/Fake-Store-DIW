// Obtém o valor do parâmetro 'id' da URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Obtém os detalhes do produto usando a API (ou de outra fonte de dados)
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(detalhes => {
    const produto = detalhes;

    // Cria a div do card grande
    const cardGrande = document.createElement('div');
    cardGrande.classList.add('card-grande');

    // Cria a imagem do produto
    const imagem = document.createElement('img');
    imagem.src = produto.image;
    imagem.alt = 'Imagem do produto';
    cardGrande.appendChild(imagem);

    // Cria as especificações do produto
    const especificacoes = document.createElement('div');
    especificacoes.classList.add('especificacoes');

    // Cria o título
    const titulo = document.createElement('h2');
    titulo.textContent = produto.title;
    especificacoes.appendChild(titulo);

    // Cria o preço
    const preco = document.createElement('span');
    preco.classList.add('preco');
    preco.innerHTML = `Preço: <span class="valor">R$${produto.price}</span>`;
    especificacoes.appendChild(preco);

    // Cria a descrição
    const descricao = document.createElement('p');
    descricao.classList.add('descricao');
    descricao.innerHTML = `<span class="titulo">Sobre esse item:</span> ${capitaliza(produto.description)}`;
    especificacoes.appendChild(descricao);

    // Cria a categoria
    const categoria = document.createElement('p');
    categoria.innerHTML = `<span class="categoria">Categoria</span>: ${capitaliza(produto.category)}`;
    especificacoes.appendChild(categoria);

    // Adiciona o botão de voltar para a home
    const botaoVoltar = document.createElement('button');
    botaoVoltar.textContent = 'Voltar para a Home';
    botaoVoltar.addEventListener('click', function() {
      window.location.href = 'index.html'; // Altere 'index.html' para o caminho correto da sua página inicial
    });

    // Adiciona o botão de compras (que não funciona)
    // const botaoCompra = document.createElement('button');
    // botaoCompra.textContent = 'Comprar';

    // Adiciona o botão na div de especificações
    especificacoes.appendChild(botaoVoltar);
    // especificacoes.appendChild(botaoCompra);

    // Adiciona as especificações no card grande
    cardGrande.appendChild(especificacoes);

    // Adiciona o card grande no container da página de detalhes
    const containerDetalhes = document.querySelector('.container-detalhes');
    containerDetalhes.appendChild(cardGrande);
  })
  .catch(error => {
    console.log('Ocorreu um erro ao obter os detalhes do produto:', error);
  });

// Função para capitalizar a primeira letra da primeira frase
function capitaliza(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
