import React from "react";
import styled from "styled-components";
import mayorsService from "../../assets/mayorsService.svg";
import cyberSecurity from "../../assets/kiberSecurity.svg";
import eCherga from "../../assets/eCherga.svg";
import eRoadLogo from "../../assets/eRoadLogo.svg";
import Card from "./Card";
import { colors } from "../../styles/colors";

const OtherProjects = ({ lang }) => {
  const projects = [
    { header: "нкцк - Національна система кібербезпеки", image: cyberSecurity },
    { header: "Агенство відновлення - е-черга", image: eCherga },
    { header: "E-road", image: eRoadLogo },
  ];

  return (
    <Container className="centered">
      <h1 className="section-header">Інші проєкти</h1>
      <div className="container">
        {projects.map((project, index) => (
          <Card
            key={index}
            lang={lang}
            header={project.header}
            image={project.image}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .section-header {
    color: ${colors.primaryDarkGray};
  }

  .container {
    overflow-x: auto;
    margin: 0 auto; /* Центрирование контейнера по горизонтали */
    display: flex;
    justify-content: space-between;
    overflow-y: hidden !important;
    padding: 1.5rem 0;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  > div {
    // margin: 0 0.5rem;
    // width: 19.5rem;
  }

  @media screen and (max-width: 1400px) {
    > div {
      // width: 18.5rem;
    }
  }
  @media screen and (max-width: 999px) {
    width: 90%;
    margin: 0 auto;
    > div {
      //   width: 16.5rem;
    }
    overflow-x: scroll;
  }

  @media screen and (max-width: 760px) {
    width: 95%;
  }
`;

export default OtherProjects;
