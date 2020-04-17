const urlBase = 'localhost:3000';

export const getProdutosPorPagina = (pagina = 1) => (
   new Promise ( (resolve) => {
    fetch(`http://${urlBase}/produtos?pagina=${pagina}`)
      .then(data => data.json())
      .then(resolve)
  })
)

export const getTodosProdutos = () => (
  new Promise ( (resolve) => {
  fetch(`http://${urlBase}/categorias`)
  .then(resolve)
  })
)

// exemplo de cxategoria http://localhost:3000/categorias/Kids/produtos