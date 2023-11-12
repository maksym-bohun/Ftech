import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mailIcon from "../../assets/mailIcon.svg";
import MailImage from "./MailImage";

import { colors } from "../../styles/colors";

const Welcome = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [imageIsFixed, setImageIsFixed] = useState(false);
  const imageRef = useRef(null);

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
      }
    };
  }, []);

  useEffect(() => {
    if (!isImageVisible) {
      console.log(imageRef.current);
      setImageIsFixed(true);
    } else setImageIsFixed(false);
    console.log(1);
  }, [isImageVisible]);

  return (
    <Container>
      <div className="centered">
        <h1 className="header">
          Цифрове <span>вдосконалення</span> держави і бізнесу
        </h1>
        <div className="text">
          <p>
            Розробка та впровадження галузевих IT рішень з метою цифровізації та
            модернізації корпоративного ринку, державних і громадських структур
          </p>
          <MailImage />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 900;
    line-height: 81.6px;
    font-size: 68px;
    span {
      color: ${colors.primaryViolet};
      font-style: italic;
    }
  }

  .text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    // position: relative;
    line-height: 31.2px;
    margin-left: 18rem;

    p {
      width: 544px;
      color: ${colors.lightColor};
      font-size: 24px;
      text-transform: uppercase;
    }
  }
`;

export default Welcome;
