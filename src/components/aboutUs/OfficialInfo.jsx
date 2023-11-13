import React from "react";
import styled from "styled-components";
import kyivLogo from "../../assets/kyiv-logo.png";
import { colors } from "../../styles/colors";

const OfficialInfo = ({ lang }) => {
  return (
    <Container className="centered">
      <div className="statistics ">
        <div>
          {lang === "UA" && (
            <>
              <h3>5</h3> <span>Років досвіду</span>
            </>
          )}
          {lang === "ENG" && (
            <>
              <h3>5</h3> <span>Years of experience</span>
            </>
          )}
        </div>
        <div>
          {lang === "UA" && (
            <>
              <h3>30+</h3> <span>Клієнтів</span>
            </>
          )}
          {lang === "ENG" && (
            <>
              <h3>30+</h3> <span>Clients</span>
            </>
          )}
        </div>
        <div>
          {lang === "UA" && (
            <>
              <h3>100К+</h3> <span>Задоволених громадян</span>
            </>
          )}
          {lang === "ENG" && (
            <>
              <h3>100К+</h3> <span>Happy citizens</span>
            </>
          )}
        </div>
        <div>
          {lang === "UA" && (
            <>
              <h3>10+</h3> <span>CRM систем</span>
            </>
          )}
          {lang === "ENG" && (
            <>
              <h3>10+</h3> <span>CRM systems</span>
            </>
          )}
        </div>
      </div>
      {/* <div className="labels">
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
      </div> */}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  .statistics {
    padding: 24px 40px;
    margin-top: 7rem;
    display: flex;
    justify-content: space-between;
    color: ${colors.lightColor};
    background-color: ${colors.secondaryDarkGray};
    border-radius: 15px;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      h3 {
        margin: 0;
        padding: 0;
        font-weight: 800;
        font-size: 24px;
      }
    }
  }

  @media screen and (min-width: 1800px) {
    padding-bottom: 5rem;
  }
`;

export default OfficialInfo;
