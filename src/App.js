import React from 'react'
import { useState } from 'react';
import { AppleProduct } from './AppleProduct';

function getRandomProduct() {
  const products = ['iphone', 'ipad', 'watch', 'imac', 'macbook', 'airpods'];

  return products[ Math.floor(Math.random() * products.length) ];
}

export function App() {

  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setProducts( [...products, getRandomProduct()] );    
  };

  const renderedProducts = products.map((product, index) => {
    return <AppleProduct type={product} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Agregar producto</button>
      <div>
        {renderedProducts}
      </div>
    </div>
  )

  // STATE: datos que cambian cuando el usuario interactua con la aplicación
  // Cuando estos datos cambian, React actualiza el contenido automáticamente
}
