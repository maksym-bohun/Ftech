import React from "react";
import styled from "styled-components";
import kyivLogo from "../../assets/icons/kyiv-logo.png";

const OfficialInfo = () => {
  return (
    <Container>
      <div className="statistics">
        <div>
          <h3>148+</h3> <span>Клієнтів</span>
        </div>
        <div>
          <h3>8</h3> <span>Років досвіду</span>
        </div>
        <div>
          <h3>148+</h3> <span>Чогось там ще крутого</span>
        </div>
        <div>
          <h3>8</h3> <span>Років на ринку</span>
        </div>
      </div>
      <div className="labels">
        <div className="label">
          <img src={kyivLogo} alt="Kyiv flag" />
          <div className="text">
            <h4>Офіційний портал Києва</h4> <h5>Київська міська рада</h5>
            <p>Київська міська державна адміністрація</p>
          </div>
        </div>
        <div className="label">
          <img src={kyivLogo} alt="Kyiv flag" />
          <div className="text">
            <h4>Офіційний портал Києва</h4> <h5>Київська міська рада</h5>
            <p>Київська міська державна адміністрація</p>
          </div>
        </div>
        <div className="label">
          <img src={kyivLogo} alt="Kyiv flag" />
          <div className="text">
            <h4>Офіційний портал Києва</h4> <h5>Київська міська рада</h5>
            <p>Київська міська державна адміністрація</p>
          </div>
        </div>
        <div className="label">
          <img src={kyivLogo} alt="Kyiv flag" />
          <div className="text">
            <h4>Офіційний портал Києва</h4> <h5>Київська міська рада</h5>
            <p>Київська міська державна адміністрація</p>
          </div>
        </div>
        <div className="label">
          <img src={kyivLogo} alt="Kyiv flag" />
          <div className="text">
            <h4>Офіційний портал Києва</h4> <h5>Київська міська рада</h5>
            <p>Київська міська державна адміністрація</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  .statistics {
    padding: 1.2rem 2.4rem;
    margin-top: 7rem;
    display: flex;
    justify-content: space-between;
    color: #000;
    background-color: #fff;
    border-radius: 15px;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      h3 {
        margin: 0;
        font-weight: 800;
        font-size: 1.4rem;
      }
    }
  }

  .labels {
    display: flex;
    justify-content: space-between;
    .label {
      display: flex;
      gap: 1.2rem;
      img {
        height: 2.8rem;
        filter: grayscale(100%);
      }

      .text {
        color: #000;
        display: flex;
        flex-direction: column;
        // gap: 0.3rem;

        h4,
        h5,
        p {
          margin: 0;
        }

        h4 {
          font-size: 0.8rem;
          margin-bottom: 0.1rem;
        }

        h5,
        p {
          color: gray;
        }

        h5 {
          font-size: 0.5rem;
        }

        p {
          font-size: 0.4rem;
        }
      }
    }
  }
`;

export default OfficialInfo;
