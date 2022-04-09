import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);
-webkit-box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);
-moz-box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);
 background-color: white;
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 @media only screen and ( max-width:480px){
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
const PriceContainer = styled.div`
    diplay: flex;
    align-items: center;
`;
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and ( max-width:480px){
        font-size: 30px;
      }
`;
const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    color: crimson;
    background-color: white;
    border-radius: 20px;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and ( max-width:480px){
        font-size: 15px;
      }
`;
const Button = styled.button`
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 16px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
   
`;
const PriceCard = ({price, type}) => {
  return (
    <Container>
        <PriceContainer>
            $<Price>{price}</Price>/month
        </PriceContainer>
        <Type>{type} Plan</Type>
        <List>
            <ListItem>200 Hand-Crafted Templates</ListItem>
            <ListItem>Excutive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>{" "}
        </List>
        <Button>JOIN NOW</Button>
        
    </Container>
  )
}

export default PriceCard