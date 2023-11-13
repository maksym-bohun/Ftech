import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";
import OfficialInfo from "./OfficialInfo";

const AboutUs = ({ lang }) => {
  console.log("langggg", lang);
  return (
    <Container>
      <Welcome lang={lang} />
      <OfficialInfo lang={lang} />
    </Container>
  );
};

const Container = styled.section`
  margin-top: 80px;
  min-height: 48rem;
`;

export default AboutUs;
