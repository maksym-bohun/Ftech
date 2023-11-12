import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import ukraineFlag from "../../assets/ukraine.png";

const Header = () => {
  return (
    <Container>
      <div className="logo">FTECH</div>

      <div className="links">
        <ul className="list">
          <li>
            <a href="#">Проєкти</a>
          </li>
          <li>
            <a href="#">Карʼєра</a>
          </li>
          <li className="language">
            <img src={ukraineFlag}></img>
            <span>UA</span>
            <span className="language__triangle">&#9660;</span>
          </li>
        </ul>
        <button>Зв'язатись</button>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.8rem;
  color: ${colors.lightColor};

  a:hover,
  a:active {
    animation: changeTextColor 0.5s;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: ${colors.lightColor};
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 3.4rem;
    list-style: none;
    text-transform: uppercase;
    font-size: 16px;

    .language {
      display: flex;
      gap: 0.3rem;
      &__triangle {
        font-size: 0.6rem;
        margin-left: 0.5rem;
      }
    }

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
      width: 168px;
      height: 51px;
      font-size: 18px;
      background-color: ${colors.primaryViolet};
      border: none;
      color: ${colors.primaryDarkGray};
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 12px;
      transition: all 0.3s;

      &: hover {
        cursor: pointer;
        box-shadow: 0 0 18px 0 #7a37ff;
      }

      &:active {
        background-color: #9c6bff;
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
`;

export default Header;
