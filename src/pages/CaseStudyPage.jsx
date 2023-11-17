import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Navigation from "../components/navigation/Navigation";
import { colors } from "../styles/colors";
import contactCenterKyiv from "../assets/contactCenterKyiv.svg";
import CaseStudy from "../components/caseStudy/CaseStudy";
import Card from "../components/caseStudy/Card";
import OtherProjects from "../components/caseStudy/OtherProjects";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { projects } from "../data/data";
import { useParams } from "react-router-dom";

const CaseStudyPage = () => {
  const lang = useSelector((state) => state.language.name);
  let lastScrollY = 0;
  const navRef = useRef(null);
  const params = useParams();
  const { projectName } = params;

  const currentProject = projects.find(
    (project) => project.urlName === projectName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      navRef.current?.classList.add("nav--hidden");
    } else {
      navRef.current?.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
  });

  return (
    <Container>
      <Navigation lang={lang} navRef={navRef} />
      <CaseStudy lang={lang} currentProject={currentProject} />
      <OtherProjects lang={lang} />
      <Footer lang={lang} />
    </Container>
  );
};

const Container = styled.main`
  background-color: #f6f7f9;
  overflow-x: hidden !important;

  .menu-opened {
    background-color: ${colors.lightColor};
    transition: all 0.3s;

    .menu {
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-height: 100%;

      button {
        width: 95%;
        margin: 3rem 0 2rem;
      }

      .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }
    }
  }

  nav {
    margin-bottom: 2rem;
    background-color: #f6f7f9;
    * {
      color: ${colors.primaryDarkGray} !important;
    }

    button {
      color: ${colors.lightColor} !important;
    }

    .language {
      &:hover {
        background-color: ${colors.lightColor} !important;
      }

      .select-buttons-container {
        background-color: ${colors.lightColor};
      }
    }
  }

  footer {
    background-color: ${colors.primaryDarkGray};
  }
`;

export default CaseStudyPage;
