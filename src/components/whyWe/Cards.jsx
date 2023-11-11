import React from "react";
import styled from "styled-components";
import ovalIcon from "../../assets/ovalIcon.svg";
import unityIcon from "../../assets/unityIcon.svg";
import speedIcon from "../../assets/speedIcon.svg";

const Cards = () => {
  return (
    <Container>
      <div className="centered cards-container">
        <div className="card card--1">
          <img src="" alt="" />
        </div>
        <div className="card card--2">
          <img src="" alt="" />
        </div>
        <div className="card card--3">
          <img src="" alt="" />
        </div>
        <div className="card card--4">
          <img src="" alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .cards-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .card {
    width: 23%;
  }
`;
export default Cards;
