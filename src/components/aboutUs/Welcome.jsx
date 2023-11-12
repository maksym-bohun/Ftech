import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mailIcon from "../../assets/mailIcon.svg";
import mailIconGradient from "../../assets/mailIconGradient.svg";
import mailText from "../../assets/mailText.svg";
import { colors } from "../../styles/colors";

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageIsFixed, setImageIsFixed] = useState(false);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Область видимости при которой сработает callback
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsImageVisible(entry.isIntersecting);
      });
    }, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Отключаем observer при размонтировании компонента
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
        setImageIsFixed(true);
      }
    };
  }, []);

  useEffect(() => {
    if (!isImageVisible) {
      console.log(imageRef.current);
    }
  }, [isImageVisible]);

  return (
    <Container>
      <h1 className="header">
        Цифрове <span>вдосконалення</span> держави і бізнесу
      </h1>
      <div className={`text ${imageIsFixed ? "" : "relative"}`}>
        <p>
          Розробка та впровадження галузевих IT рішень з метою цифровізації та
          модернізації корпоративного ринку, державних і громадських структур
        </p>
        <div
          className={`image ${imageIsFixed ? "fixed" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <div>
            <img
              className="image--icon"
              src={isHovered ? mailIconGradient : mailIcon}
              alt="mail image"
            />
            <img
              className="image--icon"
              src={isHovered ? mailIconGradient : mailIcon}
              alt="mail image"
            />
          </div>
          <img
            className="image--text"
            src={mailText}
            alt="text above the image"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 80vw;
  margin-left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  .header {
    font-size: 4rem;
    width: 1120px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 81.6px;
    span {
      color: ${colors.primaryViolet};
      font-style: italic;
    }
  }

  .text {
    display: flex;
    align-items: center;
    p {
      width: 544px;
      color: ${colors.lightColor};
      font-size: 24px;
      text-transform: uppercase;
    }

    .image {
      justify-self: center;
      position: absolute;
      height: 100%;
      width: 12rem;
      top: 0;
      left: 40rem;
      transition: transform 0.5s ease-in-out;
      border-radius: 50%;

      &:hover {
        transform: scale(1.04);
        cursor: pointer;
      }

      &--icon {
        background: ${mailIcon} center center no-repeat;
        background-size: contain;
        position: absolute;
        // z-index: ${({ isHovered }) => (isHovered ? 1 : 100)};

        &--gradient {
          // z-index: ${({ isHovered }) => (isHovered ? 100 : 1)};
        }
      }
      &--text {
        position: absolute;
        top: 0;
        animation: rotate 15s linear infinite;
      }
    }
  }
`;

export default Welcome;
