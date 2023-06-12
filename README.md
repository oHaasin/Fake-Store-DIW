# Fake Store - Desenvolvimento de Interfaces Web
## Requisitos do projeto:
* O Site traz os dados do aluno, tais como nome completo, curso e número de matrícula, visíveis na Home-Page;
* O Site é responsivo, permitindo a visualização tanto no desktop quanto em um celular de forma adequada;
* O Site tem uma Home-Page (index.html) com dados dinâmicos obtidos via Fake Store API, contemplando duas funcionalidades: 
  * Na primeira funcionalidade da Home-Page deve haver uma lista de produtos quye obedecem os seguintes requisitos:
    * Para cada produto, são exibidos três dados textuais obtidos por meio da API que descrevam sucintamente o referido item (Ex: nome, data de liberação, rating, etc);
    * Para cada produto, é exibida uma imagem ilustrativa;
    * Para cada produto, há um link que leve o usuário para uma Página de Detalhes (detalhes.html) que exibirá mais informações sobre o produto em questão. O id do produto, obtido via API, é passado como parâmetro na URL da página de detalhes. 
  * Na segunda funcionalidade da Home-Page, utiliza-se as categorias para filtrar produtos ou oferecer alguma navegação com base nesta informação.
* O site apresenta uma funcionalidade integrada de pesquisa de produtos que permite ao usuário informar um texto e obter, como resultado da pesquisa, a lista de produtos associados a partir da Fake Store API. 
* Na página de resultados da pesquisa, são obedecidos os seguintes requisitos:
  * O resultado da pesquisa não é páginado;
  * O resultado mostra uma lista de produtos, tal qual a home-page, com imagem e textos que descrevam os produtos retornados;
  * Na apresentação de cada produto do resultado da pesquisa há um link que, ao ser acionado, leve o usuário para a Página de Detalhes (detalhes.html) onde são exibidas mas informações sobre o produto.
