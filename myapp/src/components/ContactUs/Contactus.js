import React from 'react'
import "./contactus.css";
import styled from 'styled-components';


function Contactus
() {
  return (
    <Contactwrap>
      
      <Contactcontainer>
      <h2>Contact us</h2>
      <p>If you you have a question or need help with an order? Please fill out the form below or call us at +977 9812345698</p>

        <contactdetails>
          <input className="inputn"type="text" placeholder='Name'/>
          <input className="inputn"type="email" placeholder='Email'/>
          <Cmt>
          <input className="phone"type="text" placeholder="Phone Number"/>
          <input className="comment" type="text" placeholder="Comment"/>
          </Cmt>
          
          
        </contactdetails>

      </Contactcontainer>


    </Contactwrap>
    
  );
}

export default Contactus
const Contactwrap = styled.div`
padding-top: 55px;
height: 100vh;
width:100vw;
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;
text-align: left;
background-color:#BDD3C7;

`
const Contactcontainer=styled.div`
display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 25px;
    margin-left: 35px;;

`

const Cmt=styled.div`
display: flex;
flex-direction: column;

`
