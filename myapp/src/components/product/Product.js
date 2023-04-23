import React from 'react'
import "./product.css"
function Product({title,image,price,description}) {
  return (
    <div className="product">
      <div class="card">
        <div class="card-details">
          <img className="imagep" src={image} />
        </div>
        <button class="card-button">Add to cart</button>
      </div>

      <div className="details">
        <div className="detla"><p class="text-title">{title}</p>
        <p className='dheba'>{price}</p></div>
        
        
        
      </div>
    </div>
  );
}

export default Product