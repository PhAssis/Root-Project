const produtos = [
  {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'Curso de javascript',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'bbc123',
    nome: 'JSRaiz para Node',
    preco: 1200,
    descricao: 'Curso de Node',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'cbc123',
    nome: 'Programação funcional com JS',
    preco: 500,
    descricao: 'Curso de javascrit avançado',
    imagem: 'https://lorempixel.com/500/300'
  },
];



renderizaProdutos()

function renderizaProduto(produto) {
  console.log(produto)
  return `  
  <div class="col-12 col-sm-6 col-md-6 mb-3">
    <div class="card loja__item">
      <img src="${produto.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${produto.nome}</h5>
          <small>R$${produto.preco}</small>
          <p class="card-text">
            ${produto.descricao}
                </p>
          <button href="#" class="btn btn-primary">Adicionar</button>
        </div>
            </div>
    </div>
    `
}

function renderizaProdutos() {
  let html = '';
  produtos.map(item => {
    html += renderizaProduto(item)
  })
  return html;
}

document.querySelector('.loja').innerHTML = renderizaProdutos();