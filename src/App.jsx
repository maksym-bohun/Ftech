import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import Header from "./components/header/Header";
import { colors } from "./styles/colors";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Header />
      <AboutUs />
      <Services />
    </Container>
  );
}

const Container = styled.main`
  width: 80vw;
  margin-left: 10vw;
  font-family: "Nunito Sans", sans-serif;
`;

export default App;
