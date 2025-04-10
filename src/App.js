import React from 'react';
import products from './components/other/productList'
import Product from './components/Product';

function App(){


  const productsComponents = products.map(
  (obj) => {
  return <li><Product key={obj.id} name={obj.name} price={obj.price} description={obj.description}></Product></li>
  });


  return(
    <div>
      <ul>
        {productsComponents} 
      </ul>    

    </div>
  ) 
}

export default App
