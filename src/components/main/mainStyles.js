import { colors } from "../../styles/colors";
import styled from "styled-components";

export const MainContainer = styled.main`
  font-family: "Nunito Sans", sans-serif;
  overflow-x: hidden;
  margin: 0;

  .mail-image {
    position: fixed;
    bottom: 5%;
    right: -1%;
    z-index: 100;
    transform: scale(70%);
    opacity: 1;
    transition: all 0.3s;
  }

  .animated {
    animation: bounce 2s infinite;
  }

  .dark {
    background: ${colors.primaryDarkGray};
    position: relative;

    .triangle {
      position: absolute;
    }

    &--1 {
      background: linear-gradient(to bottom, #1c1c1c, #1c1c1c 60%, #36353c);

      .triangle {
        z-index: 1;

        &--2 {
          top: 26.5rem;
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
      background: ${colors.primaryDarkGray};
      min-height: 49.5rem;

      .triangle {
        z-index: 1;

        &--5 {
          top: -7%;
          left: -5.5%;
        }
        &--6 {
          top: 23%;
          left: -5.5%;
        }
        &--7 {
          top: 17.5%;
          left: 13%;
        }
        &--8 {
          top: 49%;
          top: 51%;
          left: 2%;
        }
      }
    }

    &--3 {
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
    &--1 {
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
        margin-top: 2.5%;
        margin-left: 5%;
      }

      &--7 {
        margin-top: 6%;
        // margin-left: 0.5%;
      }

      &--6 {
        margin-top: 5.5%;
        margin-left: 4.5%;
      }

      &--5 {
        margin-top: 7%;
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
`;
