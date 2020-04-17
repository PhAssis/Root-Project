import React from 'react';
import ListaProdutosContainer from './Containers/ListaProdutos'; 
import CarrinhoContainer from './Containers/Carrinho';

export default function AppComponent() {
  return (
    <React.Fragment>
      <div className="col-sm-8">
       <ListaProdutosContainer />
      </div>
      <div className="col-sm-4">
        <CarrinhoContainer />
      </div>
    </React.Fragment>
  )
}