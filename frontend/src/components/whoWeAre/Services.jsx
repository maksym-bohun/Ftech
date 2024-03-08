import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Services = () => {
  const [isHovered, setIsHovered] = useState(null);
  const frames = [
    "Dashboards",
    "Gov.tech",
    "Apps",
    "Websites",
    "CRM",
    "Ecommerce",
    "Analytics",
    "ERP",
    "BI",
    "Mobile",
    "Service Desk",
  ];

  const hoverHandler = (e) => {
    setIsHovered(frames.indexOf(e.target.textContent));
    frames.forEach((_, j) => {
      if (j !== frames.indexOf(e.target.textContent)) {
        setIsHovered(null);
      }
    });
  };

  const leaveMouseHandler = () => {
    setIsHovered(null);
  };

  return (
    <Container>
      {frames.map((frame, i) => (
        <div
          key={frame}
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveMouseHandler}
          className={`frame frame--${i + 1}  ${
            isHovered === i ? "hovered" : ""
          }`}
        >
          {frame}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  // width: 100vw;
  height: 300px;
  margin-top: 10rem;
  position: relative;
  // background-color: gray;
  margin-bottom: 0;

  .frame {
    position: absolute;
    margin: 0.2rem;
    display: inline-block;
    font-size: 46px;
    font-weight: 400;
    letter-spacing: 1.8%;
    border-radius: 1rem;
    padding: 8px 36px 8px 36px;
    text-transform: uppercase;
    color: ${colors.primaryDarkGray};

    &--1 {
      transform: rotate(10deg);
      // bottom: 2rem;
      bottom: 11%;
      // left: -0.2rem;
      left: -0.1%;
      background: linear-gradient(to right, #a7fcab, #b5c6e0);
      transition: all 0.5s;
    }

    &--2 {
      transform: rotate(17.19deg);
      // bottom: 9.6rem;
      bottom: 51%;
      // left: 1rem;
      left: 1%;
      transition: all 0.5s;
      background: linear-gradient(to right, #ffdf01, #e8f73a);
    }
    &--3 {
      // bottom: 6.4rem;
      bottom: 34%;
      // left: 21rem;
      left: 23.3%;
      transition: all 0.5s;
      transform: rotate(0deg);
      background: linear-gradient(to right, #dd79ff, #edbf5d);
    }
    &--4 {
      transform: rotate(4deg);
      // left: 35rem;
      left: 39%;
      // bottom: 7rem;
      bottom: 37%;
      transition: all 0.5s;
      background: linear-gradient(to right, #6d7bf3, #b1e9fa);
    }
    &--5 {
      transform: rotate(-10deg);
      // left: 27rem;
      left: 30%;
      // bottom: 13rem;
      bottom: 70%;
      transition: all 0.5s;
      background: linear-gradient(to right, #aff143, #d4fb7a);
    }
    &--6 {
      // left: 47.4rem;
      left: 52.5%;
      // bottom: 11.2rem;
      bottom: 60%;
      transform: rotate(10.19deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #d3a1ff, #99f2ff);
    }
    &--7 {
      left: 52.5rem;
      left: 58%;
      bottom: 2rem;
      bottom: 11%;
      transform: rotate(-10.84deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #f7733a, #ffd006);
    }
    &--8 {
      left: 78.6%;
      bottom: 8.6rem;
      bottom: 47%;
      transform: rotate(12.53deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #f7dd53, #fe8be4);
    }
    &--9 {
      left: 91%;
      bottom: 50%;
      transform: rotate(-4.3deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #5da1f2, #adc3d8);
    }
    &--10 {
      left: 81.3%;
      bottom: 6%;
      transform: rotate(-9.85deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #a0ef93, #d9ff6f);
    }
    &--11 {
      left: 29%;
      bottom: 2%;
      transform: rotate(-2.85deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #ffdf01, #e8f73a);
    }
  }

  @media screen and (min-width: 1800px) {
    width: 1500px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1400px) {
    // height: 200px;
    // padding-bottom: 1rem;
    // width: 999px;
    // margin: 8rem auto 0;
    .frame {
      font-size: 44px;
      border-radius: 11px;
      padding: 5px 24px;
    }

    // .frame {
    //   font-size: 32px;
    //   border-radius: 11px;
    //   padding: 5px 24px;

    //   &--1 {
    //     left: 2px;
    //     bottom: 2.2rem;
    //   }

    //   &--2 {
    //     left: 7.6rem;
    //     top: 3.8rem;
    //   }

    //   &--3 {
    //     left: 19rem;
    //     top: 1.2rem;
    //   }

    //   &--4 {
    //     left: 20rem;
    //     bottom: 3.2rem;
    //   }

    //   &--5 {
    //     left: 28.6rem;
    //   }

    //   &--6 {
    //     right: 17.5rem;
    //     top: 1.2rem;
    //   }

    //   &--7 {
    //     bottom: 2rem;
    //   }

    //   &--8 {
    //     top: 2.2rem;
    //     right: 10rem;
    //   }

    //   &--9 {
    //     top: 2.6rem;
    //     right: 2rem;
    //   }

    //   &--10 {
    //     // right: 10rem;
    //   }
    // }
  }
  @media screen and (max-width: 1300px) {
    .frame {
      font-size: 40px;
      border-radius: 11px;
      padding: 5px 24px;
    }
  }

  @media screen and (max-width: 1150px) {
    .frame {
      font-size: 36px;
      border-radius: 11px;
      padding: 5px 24px;

      &--1 {
        bottom: 10%;
      }
      &--2 {
        bottom: 41%;
      }
      &--3 {
        bottom: 28%;
        left: 23.3%;
      }
      &--4 {
        left: 38%;
        bottom: 32%;
      }
      &--5 {
        left: 27%;
        bottom: 56%;
      }
      &--6 {
        left: 50.5%;
        bottom: 51%;
      }
      &--7 {
        bottom: 9%;
      }
      &--8 {
        left: 78.6%;
        bottom: 38%;
      }
      &--9 {
        bottom: 37%;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .frame {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 950px) {
    .frame {
      font-size: 30px;
      padding: 5px 20px;
    }
  }

  @media screen and (max-width: 900px) {
    height: 200px;
    padding-bottom: 1rem;
    // margin: 5rem auto 0;

    .frame {
      border-radius: 8px;
      padding: 4px 14px;
      font-size: 24px;

      &--1 {
        left: -10rem;
        left: 3%;
        bottom: 1.2rem;
        bottom: 8%;
      }

      &--2 {
        left: 1%;
        bottom: 42%;
      }

      &--3 {
        bottom: 4rem;
        left: 11.2rem;
      }

      &--4 {
        left: 34%;
        bottom: 30%;
      }

      &--5 {
        left: 52%;
        bottom: 5%;
      }

      &--6 {
        left: 52%;
        bottom: 35%;
        transform: rotate(7deg);
      }

      &--7 {
        bottom: 5%;
        left: 64%;
        transform: rotate(-6deg);
      }

      &--8 {
        left: 78%;
        bottom: 32%;
      }

      &--9 {
        left: 90%;
        bottom: 35%;
      }

      &--10 {
        left: 85%;
      }

      &--11 {
        // left: 16.5rem;
        left: 27%;
      }
    }
  }

  @media screen and (max-width: 835px) {
    .frame {
      border-radius: 8px;
      padding: 4px 12px;
      font-size: 22px;
    }
  }

  @media screen and (max-width: 780px) {
    height: 200px;
    padding-bottom: 1rem;

    .frame {
      border-radius: 8px;
      padding: 4px 14px;
      font-size: 24px;

      &--1 {
        left: 1%;
        bottom: 8%;
      }

      &--2 {
        left: 1%;
        bottom: 40%;
      }

      &--3 {
        bottom: 32%;
        left: 22%;
        transform: rotate(-13deg);
      }

      &--4 {
        left: 37.5%;
        bottom: 30%;
      }

      &--5 {
        left: 35%;
        bottom: 58%;
        transform: rotate(0);
      }

      &--6 {
        left: 51%;
        bottom: 49.8%;
        transform: rotate(12deg);
      }

      &--7 {
        bottom: 5%;
        left: 55%;
        transform: rotate(-6deg);
      }

      &--8 {
        left: 76%;
        bottom: 33%;
        transform: rotate(3deg);
      }

      &--9 {
        left: 90%;
        bottom: 39%;
      }

      &--10 {
        left: 80%;
      }

      &--11 {
        left: 28%;
      }
    }
  }

  @media screen and (max-width: 730px) {
    .frame {
      &--1 {
        left: 1%;
        bottom: 8%;
      }

      &--2 {
        left: 1%;
        bottom: 40%;
      }

      &--3 {
        bottom: 62%;
        left: 19%;
        transform: rotate(-13deg);
      }

      &--4 {
        left: 25.5%;
        bottom: 32%;
      }

      &--5 {
        left: 40%;
        bottom: 58%;
        transform: rotate(0);
      }

      &--6 {
        left: 62%;
        bottom: 52%;
        transform: rotate(12deg);
      }

      &--7 {
        bottom: 30%;
        left: 52%;
        transform: rotate(8deg);
      }

      &--8 {
        left: 64%;
        bottom: 1%;
        transform: rotate(3deg);
      }

      &--9 {
        left: 90%;
        bottom: 39%;
      }

      &--10 {
        left: 80%;
      }

      &--11 {
        left: 32%;
      }
    }
  }

  @media screen and (max-width: 630px) {
    .frame {
      &--3 {
        bottom: 75%;
        left: 10%;
      }

      &--4 {
        left: 27%;
        bottom: 32%;
      }

      &--5 {
        left: 28%;
        bottom: 60%;
      }

      &--7 {
        left: 55%;
      }

      &--8 {
        left: 44%;
        bottom: 60%;
        transform: rotate(-10deg);
      }

      &--9 {
        bottom: 70%;
      }

      &--11 {
        left: 38%;
      }
    }
  }

  @media screen and (max-width: 555px) {
    .frame {
      &--1 {
        bottom: 30%;
        left: 2%;
      }

      &--2 {
        bottom: 0%;
        left: 20%;
        transform: rotate(0);
      }

      &--3 {
        bottom: 82%;
        left: 1%;
      }

      &--4 {
        left: 50%;
        bottom: 8%;
        transform: rotate(13deg);
      }

      &--5 {
        left: 2%;
        bottom: 2%;
      }

      &--6 {
        left: 65%;
        bottom: 70%;
        transform: rotate(15deg);
      }

      &--7 {
        bottom: 37%;
        left: 65%;
      }

      &--8 {
        left: 40%;
        bottom: 40%;
      }

      &--9 {
        bottom: 64%;
        left: 53%;
      }

      &--11 {
        left: 10%;
        bottom: 63%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    height: 200px;
    padding-bottom: 1rem;
    width: 390px;
    margin: 8rem auto 0;
    .frame {
      border-radius: 8px;
      padding: 4px 14px;
      font-size: 24px;

      &--1 {
        bottom: 14.5rem;
        left: 2rem;
      }

      &--2 {
        left: 15rem;
        bottom: 13rem;
        transform: rotate(18deg);
      }

      &--3 {
        left: 0;
        bottom: 7rem;
        transform: rotate(-27deg);
      }

      &--4 {
        left: 3.6rem;
        bottom: 5rem;
        transform: rotate(-11deg);
      }

      &--5 {
        left: 0rem;
        bottom: 1rem;
      }

      &--6 {
        left: 215px;
        bottom: 7rem;
        transform: rotate(-16deg);
      }

      &--7 {
        bottom: 1.4rem;
        left: 6.5rem;
        transform: rotate(-5deg);
      }

      &--8 {
        bottom: 9.8rem;
        left: 13.4rem;
        transform: rotate(0deg);
      }

      &--9 {
        bottom: 3.8rem;
        left: 20rem;
      }

      &--10 {
        bottom: 0.4rem;
        left: 17.5rem;
        transform: rotate(8deg);
      }

      &--11 {
        transform: rotate(8deg);
        left: 2px;
        bottom: 11rem;
      }
    }
  }
`;

export default Services;
