import React from 'react'
import styled from 'styled-components'
import Search from './Image/search.jpg'
const Container=styled.div`
padding: 20px;
width: 100px;  
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);
-webkit-box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);
-moz-box-shadow: 29px -18px 26px 3px rgba(0,0,0,0.46);

@media only screen and ( max-width:480px){
  width: 50px;
}
`;
const Image=styled.img`
    width: 40px;
`;
const Text=styled.span`
    margin-top: 10px;
    text-align: center;
    @media only screen and ( max-width:480px){
      font-size: 20px;
    }
`;
const MiniCard = () => {
  return (
    <Container>
        <Image src={Search}/>
        <Text>Lorem ipsom dolor set amet consectetur.</Text>
    </Container>
  )
}

export default MiniCard
