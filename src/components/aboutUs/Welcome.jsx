import React from "react";
import styled from "styled-components";
import mailImage from "../../assets/icons/mail.png";

const Welcome = () => {
  return (
    <Container>
      <div className="text">
        <h1>Код для держави та бізнесу</h1>
        <p>
          Розробка та впровадження галузевих ІТ рішень з метою цифровізації та
          модернізації корпоративного ринку, державних і громадських структур.
        </p>
      </div>
      <div className="image">
        <img src={mailImage} alt="mail image" />
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 3rem;
  align-items: center;

  .text {
    color: #000;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 5rem;
    }
    p {
      font-size: 1.2rem;
      width: 80%;
      margin-top: -1rem;
    }
  }

  .image {
    justify-self: center;
    img {
      height: 200px;
      border-radius: 50%;
    }
  }
`;

export default Welcome;
