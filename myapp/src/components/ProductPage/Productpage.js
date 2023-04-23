import React from 'react'
import Product from'../product/Product'
import './productpage.css'
function Productpage() {
  return (
    <div className="productpage">
      <h1>All Product</h1>
      <div className="itemsrow">
        
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
      </div>
      <div className="itemsrow">
        
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
      </div>
      <div className="itemsrow">
        
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
        <Product
          title="plants1"
          description="des1"
          price={200}
          image="./images/rec.png"
        />
      </div>
    </div>
  );
}

export default Productpage