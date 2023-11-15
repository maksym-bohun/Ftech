import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import eRoad from "../../assets/eRoad.svg";
import mayorsService from "../../assets/mayorsService.svg";
import kiberSecurity from "../../assets/kiberSecurity.svg";
import eCherga from "../../assets/eCherga.svg";
import { BsArrowUpRight } from "react-icons/bs";

const Portfolio = ({ lang }) => {
  const showMoreProjectsHandler = () => {};

  return (
    <Container className="centered">
      <h1 className="section-header">Портфоліо</h1>
      <div className="e-road">
        <img src={eRoad} alt="E-road demo" className="e-road__image" />
        <div className="e-road__description">
          <div className="text">
            <h2>E-road</h2>
            <p>
              Це система для автоматизації всього циклу будівництва та
              експлуатації дорожньої мережі країни. Наша інтегрована система
              планування передбачає організацію збору даних про об'єкти, що
              потребують ремонту або нового будівництва, визначення пріоритетів
              на основі експертних оцінок та зовнішніх автоматизованих систем.
            </p>
          </div>
          <a href="#" className="more-detail">
            <span> детальніше</span>
            <div className="image">
              <BsArrowUpRight size={32} strokeWidth={0.6} />
            </div>
          </a>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="project__side project__side--front">
            <h2> Служба мера Києва - 1551 CRM-система</h2>
            <img
              src={mayorsService}
              alt="Служба мера Києва - 1551 CRM-система"
            />
          </div>
          <div className="project__side project__side--back">
            <h2> Служба мера Києва - 1551 CRM-система</h2>
            <a href="#" className="more-detail">
              <span> детальніше</span>
              <div className="image">
                <BsArrowUpRight size={32} strokeWidth={0.6} />
              </div>
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__side project__side--front">
            <h2>нкцк - Національна система кібербезпеки</h2>
            <img
              src={kiberSecurity}
              alt="нкцк - Національна система кібербезпеки"
            />
          </div>
          <div className="project__side project__side--back">
            <h2>нкцк - Національна система кібербезпеки</h2>
            <a href="#" className="more-detail">
              <span> детальніше</span>
              <div className="image">
                <BsArrowUpRight size={32} strokeWidth={0.6} />
              </div>
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__side project__side--front">
            <h2>
              Агенство відновлення - <span className="next-line--sm"></span>
              е-черга
            </h2>
            <img src={eCherga} alt="Агенство відновлення - е-черга" />
          </div>
          <div className="project__side project__side--back">
            <h2>
              Агенство відновлення - <span className="next-line--sm"></span>
              е-черга
            </h2>
            <a href="#" className="more-detail">
              <span> детальніше</span>
              <div className="image">
                <BsArrowUpRight size={32} strokeWidth={0.6} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <button onClick={showMoreProjectsHandler} className="show-more ">
        {lang === "UA" && "Показати ще"}
        {lang === "ENG" && "Show more"}
      </button>
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
    margin-top: 5rem;
    
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

  .projects {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.6rem;
    min-height: 20rem;

    .project {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      max-width: 20rem;

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

  
  @media screen  and (max-width: 1400px) {
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

    .projects .project{
      transform: scale(95%);

      &__side{
        padding: 0.5rem;
        padding-bottom: 0;
         
      }
    }
  }

  @media screen  and (max-width: 1000px) {

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

    .projects .project{
      &__side{
        padding: 0.5rem;
        padding-bottom: 0;
        height: 19rem;

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

      .project:nth-child(n+3) {
        display: none; 
      }

      &.all-projects .project:nth-child(n+3) {
        display: flex; 
      }
    }
  }

  @media screen  and (max-width: 390px) {
    .projects{
      grid-template-columns: 1fr ;
      min-height: 30rem;

      .project{
        &__side{
          max-height: 14rem;
        }
      }
    }
  }
`;

export default Portfolio;
