const urlBase = 'localhost:3000';

export const getProdutosPorPagina = (pagina=1) => (
   new Promise ( (resolve) => {
    fetch(`http://${urlBase}/produtos?pagina=${pagina}`)
      .then(data => data.json())
      .then(resolve)
  })
)