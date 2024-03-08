import { colors } from "../../styles/colors";
import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0;

  .scroll {
    max-height: 110vh;
    overflow: scroll;
  }

  .mail-image {
    position: fixed;
    bottom: 20%;
    right: 8%;
    z-index: 100;
    transform: scale(70%);
    opacity: 1;
    transition: all 0.3s;
  }

  .animated {
    animation: bounce 2s infinite;
  }

  .dark {
    background-color: ${colors.primaryDarkGray};
    position: relative;
    z-index: 2;

    .triangle {
      position: absolute;
      z-index: 0;
    }

    &--1 {
      background: linear-gradient(to bottom, #1c1c1c, #1c1c1c 60%, #36353c);
      padding-top: 5rem;
      overflow-x: hidden;

      .triangle {
        z-index: 1;

        &--2 {
          top: 31.5rem;
        }
        &--3 {
          right: -10%;
          top: 10rem;
        }
      }

      * {
        z-index: 2;
      }
    }

    &--2 {
      background-color: ${colors.primaryDarkGray};
      position: relative;
      color: ${colors.lightColor};

      .triangle {
        z-index: 1;

        &--5 {
          top: 6%;
          left: -5.5%;
        }
        &--6 {
          top: 29%;
          left: -5.5%;
        }
        &--7 {
          top: 27.5%;
          left: 13%;
        }
        &--8 {
          top: 51%;
          left: 4%;
        }
      }

      &.eng {
        .triangle {
          z-index: 1;

          &--6 {
            top: 24.5%;
            left: -4.5%;
          }
          &--7 {
            top: 24.5%;
            left: 14%;
          }
          &--8 {
            top: 59.5%;
            left: 3.5%;
          }
        }
      }
    }

    &--3 {
      overflow: hidden;

      * {
        z-index: 2;
      }

      .triangle {
        z-index: 0;

        &--9 {
          &--1 {
            opacity: 0;
          }
        }

        &--10 {
          top: 8rem;
          right: -14rem;
        }
        &--11 {
          bottom: 0;
          left: 24.6rem;
        }
      }
    }

    &--4 {
      overflow-x: hidden;

      .triangle {
        &--12 {
          right: -4rem;
        }

        &--13 {
          bottom: 0;
          left: -4rem;
        }
      }
    }
  }

  .light {
    background-color: ${colors.lightColor};
    position: relative;
    color: ${colors.primaryDarkGray};
    z-index: 2;

    &--1 {
      overflow-x: hidden;

      z-index: 2;
      .triangle {
        position: absolute;
        right: -20%;
        top: 0;
        z-index: 0;
      }
    }
  }

  @media screen and (min-width: 1800px) {
    .triangle {
      &--13 {
        margin-left: 15rem;
      }
      &--12 {
        margin-right: 13rem;
      }

      &--11 {
        bottom: 0;
        margin-left: 14.6rem;
      }

      &--9 {
        opacity: 0;
        &--1 {
          opacity: 1 !important;
        }
      }

      &--8 {
        margin-top: 4%;
        margin-left: 5%;
      }

      &--7 {
        margin-top: 5%;
        margin-left: -1.5%;
      }

      &--6 {
        margin-top: 4.5%;
        margin-left: 3%;
      }

      &--5 {
        margin-top: 2%;
        margin-left: 5.5%;
      }

      &--4 {
        margin-right: 20%;
      }

      &--3 {
        margin-right: 10%;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .triangle {
      &--1 {
        margin-left: -2.4rem;
        margin-top: -3rem;
      }

      &--2 {
        margin-top: 10rem;
        margin-left: -10rem;
      }

      &--3 {
        margin-top: -2rem;
      }

      &--4 {
        margin-right: -16.4rem;
      }

      &--5 {
        margin-left: -7rem;
        transform: rotate(20deg);
      }
      &--6 {
        margin-left: -12rem;
        margin-top: 1rem;
        transform: rotate(20deg);
      }
      &--7 {
        transform: rotate(20deg);
        margin-top: 13%;
        margin-left: -11%;
      }
      &--8 {
        transform: rotate(20deg);
        margin-top: 13%;
        margin-left: -20rem;
      }
    }
    .mail-image {
      bottom: 15%;
      right: 13%;
      z-index: 100;
      opacity: 1;
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 999px) {
    .mail-image {
      bottom: 13%;
      right: 20%;
      z-index: 100;
      transform: scale(40%);
      opacity: 1;
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 760px) {
    .dark--2 {
      overflow: hidden;
    }

    .triangle {
      &--1 {
        transform: scale(70%);
        left: -10rem;
        top: -2rem;
      }

      &--2 {
        transform: scale(70%) translateX(-10rem);
        left: -1rem;
      }

      &--3 {
        transform: scale(70%) translate(16rem, -14rem);
      }

      &--4 {
        transform: scale(30%) translate(1200px, 12rem);
      }

      &--5 {
        opacity: 0;
      }

      &--6 {
        opacity: 0;
      }

      &--7 {
        opacity: 0;
      }

      &--8 {
        opacity: 0;
      }

      &--9 {
        transform: translateX(-10rem);
      }

      &--10 {
        opacity: 0;
      }

      &--11 {
        transform: translate(-20rem, 14rem);
      }
      &--12 {
        opacity: 0;
      }
      &--13 {
        transform: translate(-15rem, 0);
      }
    }
    .scroll {
      max-height: 40rem;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 390px) {
    .mail-image {
      bottom: -1%;
      right: -15%;
      z-index: 100;
      transform: scale(40%);
      opacity: 1;
      transition: all 0.3s;
    }

    overflow-x: hidden;
    .triangle {
      &--1 {
        transform: scale(70%);
        left: -10rem;
        top: -2rem;
      }

      &--2 {
        transform: scale(70%);
        left: -9rem;
      }

      &--3 {
        transform: scale(70%) translate(16rem, -14rem);
        // left: -12rem;
      }

      &--4 {
        transform: scale(30%) translate(1200px, 12rem);
      }

      &--5 {
        opacity: 0;
      }

      &--6 {
        opacity: 0;
      }

      &--7 {
        opacity: 0;
      }

      &--8 {
        opacity: 0;
      }

      &--9 {
        transform: translateX(-10rem);
      }

      &--10 {
        opacity: 0;
      }

      &--11 {
        transform: translate(-20rem, 14rem);
      }
      &--12 {
        opacity: 0;
      }
      &--13 {
        transform: translate(-15rem, 0);
      }
    }
    .scroll {
      max-height: 40rem;
      overflow: hidden;
    }
  }
`;
