import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";
import OfficialInfo from "./OfficialInfo";

const AboutUs = () => {
  return (
    <Container>
      <Welcome />
      <OfficialInfo />
    </Container>
  );
};

const Container = styled.section`
  margin: 10rem 0;
`;

export default AboutUs;
