import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import ukraineFlag from "../../assets/icons/ukraine.png";

const Header = () => {
  return (
    <Container>
      <div className="logo">
        FT
        <span>ECH</span>
      </div>

      <div className="links">
        <ul className="list">
          <li>
            <a href="#">Послуги</a>
          </li>
          <li>
            <a href="#">Проєкти</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <img src={ukraineFlag}></img>UA{" "}
            <span className="triangle">&#9660;</span>
          </li>
        </ul>
        <button>Зв'язатись</button>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.4em;
  padding-top: 1.8rem;
  color: ${colors.darkBlue};

  a:link,
  a:visited {
    text-decoration: none;
    color: ${colors.darkBlue};
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 3.4rem;
    list-style: none;
    text-transform: uppercase;

    & > li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      &: hover {
        cursor: pointer;
      }
    }

    img {
      height: 1.5rem;
    }
  }

  .links {
    font-size: 1rem;
    display: flex;
    gap: 3rem;
    margin-right: 1.6rem;
    & > button {
      padding: 0.75rem 1.5rem;
      background-color: ${colors.primaryBlue};
      border: none;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 90%;
      letter-spacing: 1px;
      border-radius: 12px;
      &: hover {
        cursor: pointer;
      }
    }
  }

  .logo {
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 700;
    & > span {
      color: ${colors.primaryBlue};
    }
  }

  .triangle {
    font-size: 0.5rem;
  }
`;

export default Header;
