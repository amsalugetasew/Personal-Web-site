import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height: 10%;
background-color: #333;
color: lightgray;
`;
const Wrapper = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
`;
const List = styled.ul`
margin: 0;
paddig: 0;
list-style: none;
display: flex;
`;
const ListItem = styled.li`
margin-right: 20px;
`;
const CopyRight = styled.span``;
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <List>
                <ListItem>Guide</ListItem>
                <ListItem>Support</ListItem>
                <ListItem>API</ListItem>
                <ListItem>Community</ListItem>
            </List>
            <CopyRight>2014 Getasew</CopyRight>
        </Wrapper>
    </Container>
  )
}

export default Footer
