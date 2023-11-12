import React, { useRef, useState } from "react";
import styled from "styled-components";
import mailIconGradient from "../../assets/mailIconGradient.svg";
import mailText from "../../assets/mailText.svg";
import mailIcon from "../../assets/mailIcon.svg";

const MailImage = ({ text = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container
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
      {text && (
        <img
          className="image__text"
          src={mailText}
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
  }
`;

export default MailImage;
