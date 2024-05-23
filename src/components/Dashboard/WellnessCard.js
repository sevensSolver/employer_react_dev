import React, { useEffect } from 'react';
import styles from './index.module.css';
import styled, { css } from "styled-components";
import { ReactComponent as YourSvg } from '../../img/svg/watch.svg'


const WellnessCard = () => {


  return (
    <>
    <h1 style={{'font-family': 'Poppins'}}>Hello, Sagar Dhiman</h1>
    <Container>
    <Rect2></Rect2>
    <Image2 src={require("../../img/watch.png")}></Image2>
    <StepsYouTookToday>Steps you took today</StepsYouTookToday>
    <LoremIpsum2>1000</LoremIpsum2>
    <LoremIpsum3>/50,000</LoremIpsum3>
  </Container>
  </>
   
  );
};

const Container = styled.div`
  width: 538px;
  height: 200px;
  position: relative;
  display: flex;
`;

const Rect2 = styled.div`
  top: 34px;
  left: 72px;
  width: 780px;
  height: 200px;
  position: absolute;
  background-color: rgba(248,125,78,1);
  border-radius: 32px;
`;

const Image2 = styled.img`
  top: 0px;
  left: 0px;
  width: 250px;
  height: 250 px;
  position: absolute;
  object-fit: contain;
`;

const StepsYouTookToday = styled.span`
  font-family: Poppins;
  top: 55px;
  left: 300px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 25px;
`;

const LoremIpsum2 = styled.span`
  font-family: Poppins;
  top: 47px;
  left: 655px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(249,243,243,1);
  font-size: 45px;
`;

const LoremIpsum3 = styled.span`
  font-family: Poppins;
  top: 89px;
  left: 661px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(184,73,29,1);
  font-size: 20px;
  margin-top:20px;
`;

export default WellnessCard;
