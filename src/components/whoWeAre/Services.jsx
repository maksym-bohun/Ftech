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
    "SEO",
    "Mobile",
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
      transform: rotate(11.5deg);
      bottom: 2.8rem;
      left: -0.2rem;
      background: linear-gradient(to right, #a7fcab, #b5c6e0);
      transition: all 0.5s;

      &:hover {
        transform: rotate(0deg);
      }

      &:hover + .frame--2 {
        transform: rotate(15deg);
        top: 3rem;
      }

      &:hover ~ .frame--3 {
        transform: rotate(-7deg);
        left: 32.5%;
      }

      &:hover ~ .frame--4 {
        left: 27.5%;
        bottom: 3rem;
      }

      &:hover ~ .frame--5 {
        transform: rotate(-3deg);
        left: 44%;
        top: 75%;
      }

      &:hover ~ .frame--6 {
        right: 27%;
        top: 11%;
        transform: rotate(10.19deg);
      }

      &:hover ~ .frame--7 {
        right: 25%;
        bottom: 18.5%;
        transform: rotate(14.84deg);
      }

      &:hover ~ .frame--8 {
        transform: rotate(-10.84deg);
      }

      &:hover ~ .frame--9 {
        right: 2%;
        top: 26%;
        transform: rotate(9deg);
      }

      &:hover ~ .frame--10 {
        right: 7%;
        bottom: 7%;
        transform: rotate(-11.85deg);
      }
    }

    &--2 {
      transform: rotate(17.19deg);
      top: 5rem;
      left: 10rem;
      transition: all 0.5s;
      background: linear-gradient(to right, #ffdf01, #e8f73a);

      &:hover {
        top: 9%;
        left: 5%;
        transform: rotate(0deg);
      }

      &:hover .frame--1 {
        transform: rotate(91.5deg);
        bottom: 2.8rem;
        left: -2rem;
      }

      &:hover ~ .frame--3 {
        transform: rotate(10deg);
        left: 30.5%;
        top: 10%;
      }

      &:hover ~ .frame--4 {
        left: 24.5%;
        bottom: 20%;
        transform: rotate(25deg);
      }

      &:hover ~ .frame--5 {
        transform: rotate(-5deg);
        left: 47%;
        top: 66.5%;
      }

      &:hover ~ .frame--6 {
        right: 27%;
        top: 2%;
        transform: rotate(-6.19deg);
      }

      &:hover ~ .frame--7 {
        right: 21%;
        bottom: 21%;
        transform: rotate(18.84deg);
      }

      &:hover ~ .frame--8 {
        top: 5%;
        transform: rotate(10.84deg);
      }

      &:hover ~ .frame--9 {
        right: 2%;
        top: 25%;
        transform: rotate(-3deg);
      }

      &:hover ~ .frame--10 {
        right: 2%;
        bottom: 7%;
        transform: rotate(-7.85deg);
      }
    }

    &--3 {
      top: 1.6rem;
      left: 27rem;
      transition: all 0.5s;
      transform: rotate(0deg);
      background: linear-gradient(to right, #dd79ff, #edbf5d);
    }
    &--4 {
      transform: rotate(-22.22deg);
      left: 28rem;
      bottom: 4rem;
      transition: all 0.5s;
      background: linear-gradient(to right, #6d7bf3, #b1e9fa);
    }
    &--5 {
      transform: rotate(0deg);
      left: 46%;
      top: 68%;
      transition: all 0.5s;
      background: linear-gradient(to right, #aff143, #d4fb7a);
    }
    &--6 {
      right: 28%;
      top: 11%;
      transform: rotate(12.19deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #d3a1ff, #99f2ff);
    }
    &--7 {
      right: 19%;
      bottom: 13%;
      transform: rotate(-10.84deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #f7733a, #ffd006);
    }
    &--8 {
      right: 14%;
      top: 18%;
      transform: rotate(12.53deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #f7dd53, #fe8be4);
    }
    &--9 {
      right: 0.3%;
      top: 26%;
      transform: rotate(-10.3deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #5da1f2, #adc3d8);
    }
    &--10 {
      right: 1.3%;
      bottom: 9%;
      transform: rotate(11.85deg);
      transition: all 0.5s;
      background: linear-gradient(to right, #a0ef93, #d9ff6f);
    }
  }

  @media screen and (min-width: 1800px) {
    width: 1500px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    height: 200px;
    padding-bottom: 1rem;
    width: 1000px;
    margin: 8rem auto 0;

    .frame {
      font-size: 32px;
      border-radius: 11px;
      padding: 5px 24px;

      &--1 {
        left: 2px;
        bottom: 2.2rem;
      }

      &--2 {
        left: 7.6rem;
        top: 3.8rem;
      }

      &--3 {
        left: 19rem;
        top: 1.2rem;
      }

      &--4 {
        left: 20rem;
        bottom: 3.2rem;
      }

      &--5 {
        left: 28.6rem;
      }

      &--6 {
        right: 17.5rem;
        top: 1.2rem;
      }

      &--7 {
        bottom: 2rem;
      }

      &--8 {
        top: 2.2rem;
        right: 10rem;
      }

      &--9 {
        top: 2.6rem;
        right: 2rem;
      }

      &--10 {
        // right: 10rem;
      }
    }
  }
`;

export default Services;
