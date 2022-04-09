import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'
import How from './Image/how.jpg'
const Container=styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    @media only screen and ( max-width:480px){
        flex-direction: column;
      }
`;
const Left=styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    @media only screen and ( max-width:480px){
        width: 100%;
        height: 100%
      }
`;
const Right=styled.div`
    width: 40%; 
    @media only screen and ( max-width:480px){
        display: none;
      }
`;
const Title=styled.h1`
width: 60%;    
font-size 60px;
@media only screen and ( max-width:480px){
    width: 100%;
    font-size: 50px;
  }
`;
const Desc=styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and ( max-width:480px){
        width: 100%;
      }
`;
const Info=styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media only screen and ( max-width:480px){
        width: 100%;
        flex-direction: column;
      }
`;
const Button=styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and ( max-width:480px){
        margin-bottom: 20px;
      }
`;
const Contact=styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone=styled.span`
    color: #f0667d;
    font-weight:bold;
`;
const ContactText=styled.span`
    color: gray;
    margin-top: 5px;
`;
const Img=styled.img`
    width: 100%;
    height: 90%;
    border: solid pink;
`;
const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>
                Adventure in creative age
            </Title>
            <Desc>
            Product design as a verb is to create a new product to be sold by a business to its customers. Designing a product is a very broad concept, it is essentially the efficient and effective generation and development of ideas through a design process that leads to new products.
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (092) 853-1589</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
   <Right><Img src={How}></Img></Right>
   <AnimatedShapes/>
   
    </Container>
  )
}

export default Intro