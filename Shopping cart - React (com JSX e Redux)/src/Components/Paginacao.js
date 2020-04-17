import React from 'react';

export default ({ proxima, anterior, primeira, ultima, atual }) => {
  return (
    <nav>
      <ul className="pagination">
        {anterior && <li className="page-item">
          <button className="page-link">Anterior</button>
        </li>}
        {[...new Array(ultima)].map((valor, index) => (
          <li className={`page-item ${(index + 1) === atual ? 'disabled' : ''}`}><button className="page-link">{index + 1}</button></li>
        ))}
        {proxima && <li className="page-item">
          <button className="page-link">Próximo</button>
        </li>}
      </ul>
    </nav>
  )
}