import styled from "styled-components"
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
const Container =styled.div`
    // height: 100vh;
    // width: 300px;
    // padding: 40px;
    // background-color: red;
    `

function App() {
  return (
    <Container>
      <NavBar/>
      <Intro/>
    </Container>
  );
}

export default App;
