import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import eRoad from "../../assets/eRoadSmall.png";
import mayorsService from "../../assets/mayorsService.svg";
import kiberSecurity from "../../assets/kiberSecurity.svg";
import eCherga from "../../assets/eCherga.svg";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../caseStudy/Card";
import { projects } from "../../data/data";

const Portfolio = ({ lang }) => {
  const showMoreProjectsHandler = () => {};
  const otherProjects = projects.filter(
    (project) => project.urlName !== "e-road"
  );

  return (
    <Container className="centered" id="portfolio">
      {lang === "UA" && <h1 className="section-header">Портфоліо</h1>}
      {lang === "ENG" && <h1 className="section-header">Portfolio</h1>}
      <div className="e-road">
        <img src={eRoad} alt="E-road demo" className="e-road__image" />
        <div className="e-road__description">
          <div className="text">
            <h2>E-road</h2>
            {lang === "UA" && (
              <p>
                Це система для автоматизації всього циклу будівництва та
                експлуатації дорожньої мережі країни. Наша інтегрована система
                планування передбачає організацію збору даних про об'єкти, що
                потребують ремонту або нового будівництва, визначення
                пріоритетів на основі експертних оцінок та зовнішніх
                автоматизованих систем.
              </p>
            )}
            {lang === "ENG" && (
              <p>
                E-road: A system for automating the entire cycle of construction
                and operation of the country's road network. Our integrated
                planning system includes the organisation of data collection on
                objects requiring repair or new construction, prioritisation
                based on expert opinions, and external automated systems.
              </p>
            )}
          </div>
          <Link to="caseStudy/e-road" className="more-detail">
            {lang === "UA" && <span> детальніше</span>}
            {lang === "ENG" && <span> read more</span>}
            <div className="image">
              <BsArrowUpRight size={32} strokeWidth={0.6} />
            </div>
          </Link>
        </div>
      </div>

      <div className="projects">
        <div>
          {otherProjects.map((project, index) => {
            return (
              <Card
                key={index}
                lang={lang}
                header={project.headerPreview[lang]}
                image={project.imagePreview}
                urlName={project.urlName}
                staticCard={project.static || false}
              />
            );
          })}
        </div>
      </div>

      {/* <button onClick={showMoreProjectsHandler} className="show-more">
        {lang === "UA" && "Показати ще"}
        {lang === "ENG" && "Show more"}
      </button> */}
    </Container>
  );
};

const Container = styled.section`
  .more-detail {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 24px;
    gap: 1rem;
    align-self: flex-end;
    padding: 0.5rem 0;
    &:link,
    &:visited {
      text-decoration: none;
      color: ${colors.primaryDarkGray};
    }
    .image {
      height: 50px;
      width: 50px;
      background-color: ${colors.primaryYellow};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .show-more{
    background-color: ${colors.primaryDarkGray};
    color: ${colors.lightColor};
    
    &:hover{
      transform: scale(101%);
      cursor: pointer;
    }
  }
    

    .e-road {
      display: flex;
      gap: 3rem;
      .text{
        h2{
        text-transform: uppercase;}
      }
    }

    &__image {
      width: 640px;
    }

    &__description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

 .projects{
      // display: block;
      margin: 0 auto;
      width: 100%;
      // overflow: auto;
      display: flex;
      flex-direction: row;
    }

  

  .projects>div {
    padding: 1rem 0;
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    // gap: 1.6rem;
    min-height: 25.5rem;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
    // overflow: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      background-color: #f5f5f5;
      border-radius: 10px;
      width: 7px;
      height: 7px;

    }

  &::-webkit-scrollbar-thumb {
    background-color: #666666;
    border-radius: 10px;
  }


    &>div{
      &:last-child{
        padding-right: 1rem;
      }
    }
    

    .project {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      max-width: 20rem;
      width: 100%;
      margin-right: 2.4rem;

     

      &__side {
        transition: all 0.8s ease;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
        padding: 1rem;
        padding-bottom: 0;
        display: flex;
          flex-direction: column;
          justify-content: space-between;

        &--front {
          background-color: ${colors.secondaryDarkGray};
          
          align-items: center;
          padding-bottom: 0;
          gap: 1rem;
          width: 100%;
        }

        &--back {
          transform: rotateY(180deg);
          background-color: ${colors.secondaryDarkGray};
          width: 100%;
          height: 100%;
         
        

          .more-detail{
            span{
              color: ${colors.lightColor}
            }
           align-self: flex-start;
          }
        }
      }


      &:hover .project__side--front {
        transform: rotateY(-180deg);
      }

      &:hover .project__side--back {
        transform: rotateY(0);
      }

      &.static{
        &:hover .project__side--front{
        transform: rotateY(0deg);
        }
        &:hover .project__side--back {
          transform: rotateY(180deg);
        }
      }

      h2 {
        color: ${colors.lightColor};
        text-transform: uppercase;
        font-weight: 700;
        font-size: 23px;
        line-height: 28.8px;
        margin: 0;
        padding: 0;
      }
    }
  }

  
  @media screen  and (max-width: 1100px) {
    .e-road {
      flex-direction: column;

      &__description{
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        .text{
          width: 580px;
        }
      }
    }

   
    .projects{
      overflow-x: auto;
      width: 100%;
    }


    .projects>div{
      width: 100%;
      margin-left:  auto;
      margin-right:  auto;
      display: flex;
      justify-content: space-between;
      
      min-height: 23.5rem;
      gap: 1rem;
      padding-bottom: 2rem;
      margin-bottom: -2rem;
    }

    .projects .project{
      transform: scale(95%);
      height: 100% !important;

      &__side{
        padding: 0.5rem;
        padding-bottom: 0;
         height: 100%;
      }
    }
  }

  @media screen  and (max-width: 999px) {

    .e-road{
     .text{
      width: 50%;
     }

     .more-detail{
      *{ font-size: 24px;}

      .image{
        height: 50px !important;
        width: 50px !important;
      }

      svg{
        height: 32px;
        width: 32px;
      }
     }
    }

    .more-detail {
      *{
        font-size: 18px;
      }

      svg{
        height: 24px;
        width: 24px;
      }

      .image {
        height: 30px !important;
        width: 30px !important;
        border-radius: 50%;
      }
    }


    .projects{
      display: flex;
      justify-content: space-around;

      &>div{
        overflow: auto;
        padding-bottom: 4rem;
        min-height: 21rem;
      }
    }

    .projects .project{
      width: 95% !important;
      &__side{
        padding-bottom: 0;
        // height: 19rem;
        height: 100%;

        h2{
          font-size: 19px;
        }

        .next-line--sm{
          margin-right: 3rem;
        }
        &--front{
          
          img{
            width: 200px;
          }
        }
      }
    }
  }


  @media screen  and (max-width: 760px) {
    .e-road{
      .text{
       width: 50%;
      }
      &__description{
        flex-direction: column;

        .text{
          width: 100%;
        }

        .more-detail{
          align-self: center;
        }
      }
    }

   

    .projects{
      grid-template-columns: 1fr 1fr;
      min-height: 15rem;

      &>div{
        min-height: 17rem;
      }

      .project:nth-child(n+3) {
        display: none; 
      }

      .project__side--front img{
        width: 98%;
      }

      &.all-projects .project:nth-child(n+3) {
        display: flex; 
      }
    }
  }

  @media screen  and (max-width: 680px) {
    .projects{
      min-height: 15rem;
      gap: 0;
      margin-bottom: 0;

      .project{
        width: 90% !important;
      }
    }


    .projects .project__side--front{
      
      img{
        width: 95%;
      }
    }

    .projects>div{
      padding-bottom: 2rem;
      overflow-x: scroll;
      display: flex;
      justify-content: space-between;
    }
    .projects>div:nth-child(3){
      // display: none;
    }
  }
  

  @media screen  and (max-width: 390px) {
    .projects{
      display: flex;
      flex-direction: column;
      // min-height: 30rem; 
      

      .project{
        &__side{
          // max-height: 14rem;
        }
      }
    }


    .projects{
      height: 30rem;
    }
    .projects>div{
      padding-bottom: 2rem;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .projects .project__side--front{
      img{
        width: 70%;
      }
    }
  }
`;

export default Portfolio;
