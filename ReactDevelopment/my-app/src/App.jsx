import styled from "styled-components"
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
<<<<<<< HEAD
const Container =styled.div`
    // height: 100vh;
=======
import Feature from './components/Feature'
import Services from "./components/Services";
import { css } from "styled-components";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
>>>>>>> 244d44c49338276e54804b240def9f22fc83c09c
    // width: 300px;
    // padding: 40px;
    // background-color: red;
    `;
const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;
const IntroShape = styled.div`
${Shape}
clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 47% 100%);
background-color: crimson;
`;
const FeatureShape = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(0 0, 47% 0%, 30% 100%, 0% 100%);
background-color: pink;
`;
const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
background-color: #f88497;
`;

const PriceShape = styled.div`
${Shape}
clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
background-color: #f69447;
`;
function App() {
  const smallScreen=window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <NavBar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Services />
       {!smallScreen && <ServiceShape/>}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
