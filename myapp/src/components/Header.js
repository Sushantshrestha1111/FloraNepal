import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi';
import {FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
     

      
    <Nav>
      <Logo src="/images/Logo.png"/>

      <NavMenu>
        
        <a>
          <Link style={{paddingLeft: 13,color:'black' ,textDecoration: 'none'}}to="/"><span>Store</span></Link>
          
        </a>
        <a>
          
          <span>Product</span>
        </a>
        <a>
          
          <Link style={{paddingLeft: 13,color:'black' ,textDecoration: 'none'}}to="/about"><span>About us</span></Link>
        </a>
        <a>
          
        <Link style={{paddingLeft: 13,color:'black' ,textDecoration: 'none'}}to="/faqs"><span>FAQs</span></Link>
        </a>
        <a>
         
        <Link style={{paddingLeft: 13,color:'black' ,textDecoration: 'none'}}to="/contactus"><span>Contact Us</span></Link>
        </a>
        <Icons><FiShoppingCart size={22}/>
        
        </Icons>
        <Icons>
        <Link style={{paddingLeft: 13,color:'black' ,textDecoration: 'none'}}to="/signupform"><FiUser size={22}/></Link>
        </Icons>
        
      </NavMenu>
     

    </Nav>
    
  
  )
}

export default Header

const Nav=styled.div`
height:70px;
background-color:#277045; 
display:flex;
align-item:center;
padding:0 36px;
overFlow-x:hidden;
z-index:1;
position:fixed;
top: 0;
    left: 0;
    right: 0;
`

const Logo=styled.img`
padding-top:14px;
padding-right:25px;
    max-height:55%;
    width:auto;

`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:400px;
align-items:start;
padding-top:25px;

a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;
  
  img{
    height:20px;
  }
  span{
    font-size:15px;
    letter-spacing:1.42px;
    position:relative;
    &:after{
      content:'';
      height:2px;
      background:white;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform-origin:left center;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
      transform:scaleX(0);
       
    }
    }
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }
}
`

const Icons=styled.div`
color:black;
padding-left:25px;
padding-right:25px
cursor:pointer;

`
