import React from 'react';
export default function ProdutoComponent(props) {
  return (
    <div className="col-12 col-sm-6 col-md-6 mb-3">
      <div className="card loja__item">
        <img className="card-img-top" src={props.item.imagem} />
        <div className="card-body">
          <h5 className="card-title">{props.item.nome}</h5>
          <small>R${props.item.preco}</small>
          <p className="card-text">{props.item.descricao}</p>
          <button className="btn btn-primary" onClick={props.onAddCarrinho.bind(null, props.item)}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}