import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Creators as carrinhoCreators } from '../Ducks/carrinho';
import {
  Selectors as produtosSelector,
  Creators as produtosCreators
} from '../Ducks/produtos';

import CardComponent from '../Components/Card';
import PaginacaoComponent from '../Components/Paginacao';


const ListaProdutos = (props) => {

  useEffect(function () {
    if (props.itens.length <= 0 && !props.loading) {
      props.buscaProdutos();

    }
  })
  return (
    <>
      <PaginacaoComponent {...props.paginacao} onClick={props.buscaProdutos}/>
      <div className="row">
        {props.loading
          ? <strong>Carregando...</strong>
          : props.itens.map((produto, index) => (
            <CardComponent
              item={produto}
              onClick={props.onClick}
              key={`produto-${index}`}
            />
          ))}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state),
  loading: produtosSelector.isLoading(state),
  paginacao: produtosSelector.getPaginacao(state)
})


const mapDispatchToProps = (dispatch) => ({
  onClick(item) {
    dispatch(carrinhoCreators.addItem(item))
  },
  buscaProdutos(pagina) {
    dispatch(produtosCreators.buscaProdutos(pagina))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos);