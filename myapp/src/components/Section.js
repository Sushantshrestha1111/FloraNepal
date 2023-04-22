import React from 'react'
import styled from 'styled-components'


function Section() {
  return (
    <Container>
        
        <Wrap>
            

            <Description>
                <span><h1>Decor Your Home</h1></span>
                <p>Discover our wide selection of indoor plants in our shop.</p>
               
                
                    
            </Description>
            <Button>Learn More</Button>
            
            


        </Wrap>
        
    </Container>
  )
}

export default Section

const Container=styled.div`
overflow:hidden;
width:100vw;
height:100vh;
background:url("/images/cover.png");
background-size: cover;
background-repeat:no-repeat;

`
const Wrap=styled.div`




`
const Description=styled.div`
padding-top:30vh;
display: flex;
flex-direction: column;

top:0;
text-align:left;
margin-left:50px;
 









`
const Button=styled.div`
border-radius:13px;
background-color:white;
width:130px;
height:40px;
cursor:pointer;
text-align:center;
padding:2px;
margin-left:50px;
margin-top:25px;

align-items: center;


`
const Img=styled.div`

`
