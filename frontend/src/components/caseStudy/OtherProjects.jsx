import React from "react";
import styled from "styled-components";
import mayorsService from "../../assets/mayorsService.svg";
import Card from "./Card";
import { colors } from "../../styles/colors";
import { projects } from "../../data/data";

const OtherProjects = ({ lang, currentProject }) => {
  const otherProjects = projects.filter(
    (project) => project.urlName !== currentProject.urlName
  );
  // const projects = [
  //   { header: "нкцк - Національна система кібербезпеки", image: cyberSecurity },
  //   { header: "Агенство відновлення - е-черга", image: eCherga },
  //   { header: "E-road", image: eRoadLogo },
  // ];

  return (
    <Container className="centered">
      {lang === "UA" && <h1 className="section-header">Інші проєкти</h1>}
      {lang === "ENG" && <h1 className="section-header">Other projects</h1>}
      <div className="container">
        {otherProjects.map((project, index) => (
          <Card
            key={index}
            lang={lang}
            header={project.headerPreview[lang]}
            image={project.imagePreview}
            urlName={project.urlName}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 15rem;
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
