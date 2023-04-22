import React from 'react'
import styled from 'styled-components'
import Product from './product/Product'
function Best() {
  return (
    <div>
        <Container>
          <Wrap>
          <h1>Best Selling Products</h1>
          <Prod>
           <Product/>
            <Product/>
            <Product/>
          </Prod>
            

          </Wrap>
            

        </Container>
    </div>
  )
}

export default Best

const Container=styled.div`
background-color:#FAF0E6;
height:80vh;
align-items:left;
text-align:left;

`
const Wrap=styled.div`
margin-top:5px;
margin-left:45px;
`
const Prod=styled.div`
display:flex;`