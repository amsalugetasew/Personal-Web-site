import React from 'react'
import styled from 'styled-components'
import App from './Image/app.jpg'
import AnimatedShapes from './AnimatedShapes'
const Container =styled.div`
    display: flex;
    @media only screen and ( max-width:480px){
        flex-direction: column;
      }
`;
const Left =styled.div`
    width: 50%;
    @media only screen and ( max-width:480px){
        display: none;
        padding: 30px 20px;
      }
`;
const Right =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    @media only screen and ( max-width:480px){
        width: 100%;
      }
`;
const Img=styled.img`
margin-top: 30px;
margin-left: 30px;
width: 60%;
height: 70%;
`;
const Title=styled.span`
font-size: 70px;
@media only screen and ( max-width:480px){
    font-size: 50px;;
  }
`;
const SubTitle=styled.span`
font-size: 24px;
font-style: italic;
color: #333;
`;
const Desc=styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`;
const Button=styled.button`
width: 170px;
border: none;
padding: 15px 20px;
background-color: darkblue;
colore: white;
font-size: 20px; 
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
`;
const Feature = () => {
  return (
    <Container>
        <Left><Img src={App}/></Left>
        <Right>
            <Title><b>Good</b> Design <br/><b>Good</b> Job</Title>
            <SubTitle>clip-path property </SubTitle>
            <Desc> The clip-path property allows you to make complex shapes in CSS by clipping an element to a basic shape (circle, ellipse, polygon, or inset), or to an SVG source.

CSS Animations and transitions are possible with two or more clip-path shapes with the same number of points.</Desc>
            <Button>Learn more...</Button>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Feature