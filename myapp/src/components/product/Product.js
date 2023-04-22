import React from 'react'
import "./product.css"
function Product({title,image,price,description}) {
  return (
    <div className='product'>
      
      <div class="card">
  <div class="card-details">
  <img className="imagep"src={image}/>
    
  </div>
  <button class="card-button">More info</button>
</div>

<p class="text-title">{title}</p>
    <p class="text-body">{description}</p>
    <p>{price}</p>


    </div>
  )
}

export default Product