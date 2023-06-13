fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const produtos = data;
    const container = document.querySelector('.produtos');
    const searchInput = document.getElementById('search');

    // Função para filtrar os produtos com base na pesquisa
    const filtrarProdutos = () => {
      const termoPesquisa = searchInput.value.toLowerCase();
      const produtosFiltrados = produtos.filter(produto => produto.title.toLowerCase().includes(termoPesquisa));

      // Limpa os produtos antigos antes de exibir os resultados filtrados
      container.innerHTML = '';

      produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card-produto');

        const imagem = document.createElement('img');
        imagem.src = produto.image;
        imagem.alt = 'Imagem do produto';

        const titulo = document.createElement('h2');
        titulo.textContent = produto.title;

        const categoria = document.createElement('p');
        const categoriaText = produto.category;
        const categoriaCapitalizada = categoriaText.charAt(0).toUpperCase() + categoriaText.slice(1);
        categoria.textContent = `${categoriaCapitalizada}`;

        const preco = document.createElement('span');
        preco.classList.add('preco');
        preco.textContent = `R$${produto.price}`;

        const botao = document.createElement('button');
        botao.textContent = 'Detalhes';
        botao.addEventListener('click', () => {
          const productId = produto.id;
          window.location.href = `detalhes.html?id=${productId}`;
        });

        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(categoria);
        card.appendChild(preco);
        card.appendChild(botao);

        container.appendChild(card);
      });

      if (produtosFiltrados.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
      }
    };

    // Adiciona o evento de entrada no campo de pesquisa
    searchInput.addEventListener('input', filtrarProdutos);

    // Exibe todos os produtos inicialmente
    filtrarProdutos();
  })
  .catch(error => {
    console.log('Ocorreu um erro ao obter os produtos:', error);
  });
