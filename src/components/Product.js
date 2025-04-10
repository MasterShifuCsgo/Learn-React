import React from 'react';
/*    
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    description: "A sleek and ergonomic wireless mouse with long battery life."
*/
function Product(props){
  return(
    <div className='product-item'>
      <h1>{props.name}</h1>
      <h2>Price: {props.price}$</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Product
