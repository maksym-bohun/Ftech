import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Faq = () => {
  return (
    <Container>
      <h2>Faq</h2>
      <div className="container">
        <h1>
          МИ ДАЄМО БІЛЬШЕ, НІЖ ВИ ОЧІКУЄТЕ, БО ШУКАЄМО РІШЕННЯ, ЯКЕ{" "}
          <span>ПРАЦЮЄ НА 100%</span>
        </h1>
        <div className="accordions">
          <button className="accordion">
            ЧОМУ НЕБО БЛАКИТНЕ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="accordion">
            СКІЛЬКИ КОШТУЄ ШОСЬ ТАМ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>

          <button className="accordion">
            ЧОМУ НЕБО БЛАКИТНЕ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
          <button className="accordion">
            СКІЛЬКИ КОШТУЄ ШОСЬ ТАМ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
          <button className="accordion">
            ЧОМУ НЕБО БЛАКИТНЕ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
          <button className="accordion">
            СКІЛЬКИ КОШТУЄ ШОСЬ ТАМ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
          <button className="accordion">
            ЧОМУ НЕБО БЛАКИТНЕ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
          <button className="accordion">
            СКІЛЬКИ КОШТУЄ ШОСЬ ТАМ? <span>&#9660;</span>
          </button>
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  margin: 5rem 0 10rem 0;
  width: 100%;

  h2 {
    color: ${colors.primaryBlue};
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: 800;
  }

  h1 {
    color: #000;
    width: 90%;
    font-size: 2.6rem;
    line-height: 3.2rem;
    align-self: end;
    margin-bottom: 0;

    span {
      color: ${colors.primaryBlue};
    }
  }

  .container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 1.2rem;
  }

  .accordions {
    margin-left: 6rem;
  }

  .accordion {
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-bottom: 2px solid #000;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
    cursor: pointer;
    padding: 1.4rem 18px 0.5rem;
    width: 100%;
    text-align: left;
    outline: none;
    transition: 0.4s;

    span {
      font-size: 1.2rem;
    }
  }

  .active,
  .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }
`;

export default Faq;
