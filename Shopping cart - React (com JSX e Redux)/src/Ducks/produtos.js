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

function buscaProdutos() {
  return function (dispatch) {
    dispatch(produtosInicializando());
    backendService
      .getProdutosPorPagina()
      .then(function (data) {
        dispatch(produtosFinalizado(data))
    })
      
  }
};

export const Creators = {
  buscaProdutos,
}

export default function (state = { data: [] }, action) {
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
        data: action.payload.data
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