import React, { useEffect } from 'react';
import styles from './index.module.css';
import styled, { css } from "styled-components";
import { ReactComponent as YourSvg } from '../../img/svg/watch.svg'


const EventCard = () => {


  return ( 
    <div style={{'display':'flex','flexDirection':'row'}}>
{[1,2].map((item,index) => (
    <Container key ={index} style={{'margin':'0px 20px'}}>
    <Rect></Rect>
    <Image src={require("../../img/eventcard.png")}></Image>
    <LoremIpsum>12 Aug 2023</LoremIpsum>
    <BiometricScreening>Biometric{"\n"}Screening</BiometricScreening>
  </Container>
))}
    </div>
   
  );
};

const Container = styled.div`
  width: 355px;
  height: 159px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 16px;
  left: 0px;
  width: 400px;
  height: 128px;
  position: absolute;
  background-color: #fff;
  border-radius: 24px;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  width: 159px;
  height: 159px;
  position: absolute;
  object-fit: contain;
`;

const LoremIpsum = styled.span`
  font-family: Poppins;
  top: 26px;
  left: 255px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const BiometricScreening = styled.span`
  font-family: Poppins;
  top: 69px;
  left: 185px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 24px;
`;

export default EventCard;
