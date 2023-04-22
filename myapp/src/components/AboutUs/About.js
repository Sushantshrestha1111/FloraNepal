import React from "react";
import styled from "styled-components";
import "./about.css";
import Lpart from "./Lpart";
import BtShit from "../BottomShit/BtShit";

function About() {
  return (
    <div className="Aboutwrap">
      <div className="Contaner">
        <h2 className="aboutUs">About us</h2>
        <h1 className="flora">Flora Nepal</h1>
        <div className="Description">
          <img className="image" src="/images/aboutUs.png" />
          <div className="desBox">
            <p className="des">
              We are indoor plants supplier for hobbyist, small business,
              stores,companies and corporate.We also work with farmers and
              nursery to provide high quality indoor plants.Surrounded by plants
              and working in greenery, we are deeply involved with nature. Our
              small company is based on what nature has to offer and what
              enables us to grow. We think it is important to make the world a
              greener place and that is why Flora Nepal is the right place for
              everyone.
            </p>
            <p className="des">
              Regardless, it is the location where every person who enjoys
              plants feels at home. We offer huge houseplants, uncommon plants,
              and adorable, small baby plants in our online store. The products
              you need to care for your plants and make sure they look good in
              your home's decor are also a big part of our attention, so we
              don't only concentrate on plants. In addition to fostering a sense
              of comfort, security, and calm, plants help make a place feel like
              a home.
            </p>
          </div>
        </div>

        <div className="lowerDes">
          <span>
            <h2> WHAT WE DO?</h2>
          </span>
          <p>
            We like to plant and collect plants and occasionally sell them all
            over nepal.We sell all type of plants but we are mainly focused on
            Indoor plants.We deliver healthy, happy plants to you and your loved
            ones.
          </p>
        </div>
      </div>
      <div className="lower">
        <Lpart />
        <Lpart />
        <Lpart />
      </div>

      <BtShit />
    </div>
  );
}

export default About;

const img = styled.div`
  width: 343px;
  height: 384px;
`;
