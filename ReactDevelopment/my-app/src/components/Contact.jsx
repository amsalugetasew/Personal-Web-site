import React from 'react'
import styled from 'styled-components'
import Map from './Image/map.png'
import Phone from './Image/phone.png'
import Send from './Image/telegram.png'
const Container = styled.div`
   height: 90%;
   background: url(""); 
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and ( max-width:480px){
        flex-direction: column;
      }
`;
const FormContainer = styled.div`
    width: 50%;
    @media only screen and ( max-width:480px){
        width: 100%
      }
`;
const Title=styled.h1`
    margin: 60px;
    margin-top: 0;
    @media only screen and ( max-width:480px){
        margin: 20px;
      }
`;

const Form = styled.div`
    height: 250%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and ( max-width:480px){
        flex-direction: column;
      }
`;
const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-right: 20px;
    @media only screen and ( max-width:480px){
        height: 50%;
        margin-right: 0px;
      }
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    @media only screen and ( max-width:480px){
        padding: 5px;
      }
`;
const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and ( max-width:480px){
        padding: 5px;
      }
`;
const TextArea = styled.textarea`
    width: 200px;
    height: 80px;
    padding: 20px;
    @media only screen and ( max-width:480px){
        padding: 5px;
        margin-top: 20px;
      }
`;
const Button=styled.button`
border: none;
background-color: darkblue;
color: white;
font-size: 16px;
padding: 15px;
border-radius: 10px;
cursor: pointer;
font-weight: bold;
margin-top: 20px;
@media only screen and ( max-width:480px){
    padding: 5px;
    font-size: 14px;
  }
`;
const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and ( max-width:480px){
        width: 100%;
        margin-top: 50px;
      }
`;
const AddressItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 50px;
@media only screen and ( max-width:480px){
    margin-bottom: 20px;
    justify-content: space-between:
  }
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and ( max-width:480px){
        width: 15px;
      }
`;
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    @media only screen and ( max-width:480px){
        font-size: 14px;
      }
`;
const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions? <br/> Let's Get In Touch</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder='Name' />
                            <Input placeholder='Email' />
                            <Input placeholder='Subject' />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder='Your Message or Comment' />
                            <Button>Contact Me</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map}/>
                        <Text>
                            Embacy Maraki, Gondar, Ethiopia
                        </Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone}/>
                        <Text>
                           +2 519 2853 1589
                        </Text>
                        <Text>
                           +2 519 2855 1749
                        </Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send}/>
                        <Text>
                            amsalugetasew12@gmail.com
                        </Text>
                        <Text>
                            getasewamsalu12@gmail.com
                        </Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact