import React, { useState} from 'react'
import styled from 'styled-components'
import How from './Image/how.jpg'
import MiniCard from './MiniCard';
import Play from './Image/play.png'
import Videos from './Video/Horse.mp4'
const Container=styled.div`
display: flex;
height: 100%;
@media only screen and ( max-width:480px){
    flex-direction: column;
  }
`;
const Left=styled.div`
  width: 50%;
  position: relative;
  @media only screen and ( max-width:480px){
    display: none;
  }
`;
const Right=styled.div`
   width: 50%;
   @media only screen and ( max-width:480px){
    width: 100%;
  }
`;
const Image=styled.img`
display: ${(props) => props.open && "none"};
margin-left: 100px;
margin-top: 30px;
height: 100%;
width: 60%;
`;
const Video=styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
margin: auto;
@media only screen and ( max-width:480px){
    width: 100%;
  }
`;
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and ( max-width:480px){
        padding: 20px;
        width: 100%;
        height: 100%;
      }
`;
const Title=styled.h1`
    font-size: 70px;
    @media only screen and ( max-width:480px){
      font-size: 20px;
    }
`;
const Desc=styled.p`
    font-size: 20px;
    margin-top: 30px;
    color: #555;
`;
const CardContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;
const Button=styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;
    margin: 30px;
    display: flex;
    align-items: center
    @media only screen and ( max-width:480px){
        padding: 20px;
        width: 100%;
        height: 100%;
      }
`;
const Icon=styled.img`
    width: 20px;
    margin-right: 10px;
`;
const Modal = styled.div`
width: 100vw;
height: 100vh;
position: absilute;
top: 0;
left: 0;
background-color: rgb(0,0,0, 0.5);
`;
const CloseButton = styled.button`
      position: absolute;
      background-color: white;
      border: none;
      border-radius: 5px;
      right: 5px;
      top: 30%;
`;
const Services = () => {
    const [open, setOpen] = useState(false);
    const smallScreen=window.screen.width <= 480 ? true : false;

  return (
    <Container>
        <Left>
            <Image open={open} src={How}/>
            <Video 
            autoPlay 
            loop 
            controls 
            open={open} 
            src={Videos}/>
        </Left>
        <Right>
            <Wrapper>
                <Title>
                    This is my service
                </Title>
                <Desc>
                According to BusinessDictionary.com, 
                services are: “Intangible products 
                such as accounting, banking, cleaning, 
                consultancy, education,
                 insurance, expertise, medical 
                 treatment, or transportation.”
                </Desc>
                <CardContainer>
                    <MiniCard/>
                    <MiniCard/>
                    <MiniCard/>                    
                </CardContainer>
                <Button onClick={() => setOpen(true)}>
                    <Icon src={Play}/> 
                    How it works
                </Button>
            </Wrapper>
        </Right>
        {smallScreen && open && (
        <Modal>
            <Video
            autoPlay 
            loop 
            controls 
            open={open} 
            src={Videos}
            />
            <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
        </Modal>
        )}
    </Container>
  )
}

export default Services