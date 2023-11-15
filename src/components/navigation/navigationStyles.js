import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.lightColor};

  >div{
    width: 100%;

    .menu{
      transition: all 0.5s;
      display: flex;
        flex-direction: column;
        align-items: center;
      max-height: 100%;

      button{
        width: 90%;
        margin: 3rem 0 2rem;
      }

      .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }
      
      &--hidden{
        opacity: 0;
        pointer-events: none;
        max-height: 0;
      }
    }
  }

  .menu-opened{
    background-color: ${colors.secondaryDarkGray};
    transition: all 0.3s;

    .menu{
      transition: all 0.5s;
      display: flex;
        flex-direction: column;
        align-items: center;
      max-height: 100%;

      button{
        width: 90%;
        margin: 3rem 0 2rem;
      }

      .list{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }
      
    }
  }

  button {
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


  .container{
    padding-top: 1.8rem;
    

    display: flex;
    // width: 100%;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .logo{
      width: 25%;
    }

    .links{
      width: 75%;
    }
  }

  a:hover,
  a:active {
    animation: changeTextColor 0.5 ease-out forwards;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: ${colors.lightColor};
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    list-style: none;
    text-transform: uppercase;
    font-size: 16px;
    align-items: center;

    .select-buttons-container {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      aling-items: center;
      border-radius: 12px;
      background-color: ${colors.secondaryDarkGray};
      transition: opacity 0.3s, transform 0.1s;


      &.shown {
        z-index: 2
        opacity: 1;
        transition: opacity 0.3s, transform 0.1s;

        
        .language__triangle{
          transform: rotate(180deg);
        }
      }

      &.hidden{
      z-index: -10;
      opacity: 0;
      cursor: default;
      transition: opacity 0.3s, transform 0.1s;
        pointer-events: none;

      }

      .line {
        width: 90%;
        height: 1px;
        background-color: ${colors.primaryDarkGray};
      }
    }

    .select-button {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 12px 24px;
      width: 5.4rem;


      img {
        width: 21px;
      }
    }

    .language {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      position: relative;
      width: 5.4rem;

      img {
        width: 21px;
      }

      &:hover {
        background-color: ${colors.secondaryDarkGray};
      }

      &__button {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        width: 5.4rem;
      }
      &__triangle {
        font-size: 0.6rem;
        margin-left: 0.5rem;
      }
    }

    & > li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 12px 24px;

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
    align-items: center;

    
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

  .menu-btn{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    display: none;


    &__burger{
      width: 46px;
    height: 6px;
    border-radius:  5px;
    transition: all 0.5s ease-in-out;
    background-color: ${colors.primaryViolet};
    
    &::before, &::after{
      content: '';
      position: absolute;
      width: 46px;
      height: 6px;
      border-radius:  5px;
      transition: all 0.5s ease-in-out;
      background-color: ${colors.primaryViolet};
    }

    &::before{
      transform: translateY(-13px); 
    }
    &::after{
      transform: translateY(13px); 
      }
    }

    &.open .menu-btn__burger{
      transform: translateX(-50px);
      background-color: transparent;
    }

    &.open .menu-btn__burger::before{
      transform: rotate(45deg) translate(35px, -35px);
    }
    &.open .menu-btn__burger::after{
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }

  @media screen and (max-width: 1000px){
      .links{
        gap: 0;

        .list{
          gap: 0;
        }
      }
  }

  @media screen and (max-width: 760px){
    .menu-btn{
      display: flex;
    }

    .links{
      display: none;
    }
  }

`;
