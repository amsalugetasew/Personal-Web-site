import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height:50px;
`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
// justify-content:space-around;
// justify-content:center;
// justify-content:space-evenly;
`;
const Left=styled.div`
width:60%;
`;
const Logo=styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
       <span><Logo>Agency</Logo></span> 
       <span>Button</span> 
    </Wrapper> 
    </Container>
  )
}

export default NavBar
