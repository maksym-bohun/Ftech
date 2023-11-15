import React, { useRef, useState } from "react";
import styled from "styled-components";
import mailIconGradient from "../../assets/mailIconGradient.svg";
import mailText from "../../assets/mailText.svg";
import mailTextEng from "../../assets/mailTextEng.svg";
import mailIcon from "../../assets/mailIcon.svg";

const MailImage = ({ text = true, lang, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  console.log("langgg", lang);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={imageRef}
    >
      <div className="image__icons">
        <img
          className="image__icon"
          src={isHovered ? mailIconGradient : mailIcon}
          alt="mail image"
        />
        <img
          className="image__icon"
          src={isHovered ? mailIconGradient : mailIcon}
          alt="mail image"
        />
      </div>
      {text && lang === "UA" && (
        <img
          className="image__text"
          src={mailText}
          alt="text above the image"
        />
      )}
      {text && lang === "ENG" && (
        <img
          className="image__text left"
          src={mailTextEng}
          alt="text above the image"
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 12rem;
  width: 12rem;
  z-index: 10;
  justify-self: center;
  position: relative;
  margin-left: 2rem;
  transition: transform 0.5s ease-in-out;
  border-radius: 50%;

  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }

  .image__icon {
    background: ${mailIcon} center center no-repeat;
    background-size: contain;
    position: absolute;
  }
  .image__text {
    position: absolute;
    top: 0;
    animation: rotate 15s linear infinite;

    &.left {
      left: -2%;
      top: -1%;
    }
  }

  @media screen and (max-width: 1400px) {
    margin-left: 0;
  }

  @media screen and (max-width: 1000px) {
    .image__text {
      &.left {
        left: 12%;
        top: -1%;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .image__text {
      &.left {
        left: 12%;
        top: -1%;
      }
    }
  }
`;

export default MailImage;
