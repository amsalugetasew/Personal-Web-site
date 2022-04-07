import React from 'react'
import styled from 'styled-components'
import App from './Image/app.jpg'
const Container =styled.div`
    display: flex;
`;
const Left =styled.div`
    width: 50%;
`;
const Right =styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
`;
const Img=styled.img`
    width: 80%;
`;
const Title=styled.span`
font-size: 70px;
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
    </Container>
  )
}

export default Feature