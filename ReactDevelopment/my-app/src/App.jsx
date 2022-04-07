import styled from "styled-components"
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Feature from './components/Feature'
const Container =styled.div`
    height: 100vh;
    overflow: hidden;
    // width: 300px;
    // padding: 40px;
    // background-color: red;
    `
const IntroShape=styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 47% 100%);
background-color: pink;
`;
function App() {
  return (
    <>
    <Container>
      <NavBar/>
      <Intro/>
      <IntroShape/>
    </Container>
    <Container>
      <Feature/>
    </Container>
    </>
  );
}

export default App;
