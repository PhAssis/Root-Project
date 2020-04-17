import React from 'react';

export default () => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item"><button className="page-link">Anterior</button></li>
        <li className="page-item"><button className="page-link">1</button></li>
        <li className="page-item"><button className="page-link">2</button></li>
        <li className="page-item"><button className="page-link">3</button></li>
        <li className="page-item"><button className="page-link">Próximo</button></li>
      </ul>
    </nav>
  )
}