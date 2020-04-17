import React from 'react';

export default () => (
    <ul class="nav">
      <li class="nav-item">
        <button class="nav-link active" href="#">Todas as categorias</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" href="#">Books</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" href="#">Toys</button>
      </li>
      <li class="nav-item">
        <button class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Kids</button>
      </li>
    </ul>
)