import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height:50px;
`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content:space-between;
// justify-content:space-around;
// justify-content:center;
// justify-content:space-evenly;
`;
const Left=styled.div`
width:60%;
display: flex;
align-items: center;
justify-content:space-between;
`;
const Logo=styled.h1`
font-weight: bold;
text-decoration: underline crimson;
`
const Menu=styled.ul`
display: flex;
list-style: none;
// @media only screen and ( max-width:480px){
//   display: none;
// }
@media only screen and ( max-width:480px){
  width: 100%;
  flex-direction: column;
}
`;
const MenuItem=styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  @media only screen and ( max-width:480px){
    width: 100%;
    flex-direction: column;
  }
`;
const Button=styled.button`
border: 2px solid white;
padding: 10px 15px;
background-color: crimson;
border-radius: 10px;
cursor: pointer;
`;
const NavBar = () => {
  return (
    <Container>
      <Wrapper>
       <span><Logo>Agency</Logo></span> 
       <Left>
       <Menu>
         <MenuItem>Home</MenuItem>
         <MenuItem>Features</MenuItem>
         <MenuItem>Services</MenuItem>
         <MenuItem>Pricing</MenuItem>
         <MenuItem>Contact</MenuItem>
       </Menu>
       </Left>
       <Button>JOIN NOW</Button> 
    </Wrapper> 
    </Container>
  )
}

export default NavBar
