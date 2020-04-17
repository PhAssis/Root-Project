import * as backendService from '../Services/backend';

const Types = {
  DONE: 'PRODUTOS_DONE',
  INIT: 'PRODUTOS INIT'
}

const produtosFinalizado = (payload) => ({
  type: Types.DONE,
  payload
});

const produtosInicializando = () => ({
  type: Types.INIT
})

function buscaProdutos(pagina = 1) {
  return function (dispatch) {
    dispatch(produtosInicializando());
    backendService
      .getProdutosPorPagina()
      .then(function (data) {
        dispatch(produtosFinalizado({
          ...data,
          atual: pagina
        }))
    })
      
  }
};

export const Creators = {
  buscaProdutos,
}

const estadoInicial = {
  data: [],
  atual: 1
}

export default function (state = estadoInicial, action) {
  switch (action.type) {
    case Types.INIT:
      return {
        ...state,
        loading: true
      }
    case Types.DONE:
      return {
        ...state,
        loading: false,
        anterior: action.payload.prev || null,
        proximo: action.payload.next || null,
        primeira: action.payload.first, 
        ultima: action.payload.last,
        data: action.payload.data,
        atual: action.payload.atual

      }
    default:
      return state;
  }
}


const getProdutos = state => state.produtos.data;
const isLoading = state => state.produtos.loading;

export const Selectors = {
  getProdutos,
  isLoading,
};