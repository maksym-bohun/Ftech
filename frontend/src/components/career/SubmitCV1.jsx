import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import attachmentIcon from "../../assets/attachmentIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { BsArrowUpRight } from "react-icons/bs";
import validator from "validator";
import emailjs from "@emailjs/browser";

const SubmitCv = ({ getData, isLoading, cvSent }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const formRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  useEffect(() => {
    if (cvSent)
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
      });
  }, [cvSent]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleRemoveFile = (e) => {
    setSelectedFile(null);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    let dataIsValid = true;
    if (!validator.isEmail(formData.email)) {
      dataIsValid = false;
      emailInputRef.current.classList.add("invalid");
    }
    if (validator.isEmpty(formData.name)) {
      dataIsValid = false;
      nameInputRef.current.classList.add("invalid");
    }

    if (dataIsValid) {
      // getData({ ...formData, file: selectedFile });
      // emailjs.sendForm("service_iyoa5qq", "template_u79p1g8", this);
    }
  };

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") nameInputRef.current.classList.remove("invalid");
    if (name === "email") emailInputRef.current.classList.remove("invalid");
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className="">
      <div className="submit-cv-section centered">
        <div>
          <h1>Submit </h1>
          <h1>cv</h1>
        </div>
        <form onSubmit={submitFormHandler}>
          <input
            onChange={changeInputHandler}
            type="text"
            name="name"
            placeholder="Your name*"
            ref={nameInputRef}
          />
          <input
            onChange={changeInputHandler}
            type="email"
            name="email"
            placeholder="E-mail*"
            ref={emailInputRef}
          />
          <input
            onChange={changeInputHandler}
            type="tel"
            name="phone"
            placeholder="Phone"
          />
          <textarea
            onChange={changeInputHandler}
            name="coverLetter"
            placeholder="Cover letter"
          />
          {selectedFile && (
            <div className="attached-file">
              <div className="attached-file__name">
                <img src={attachmentIcon} alt="Attachment Icon" />{" "}
                <span className="selected-file">{selectedFile.name}</span>
              </div>
              <div className="remove-file-btn" onClick={handleRemoveFile}>
                <img src={closeIcon} alt="close icon" />
              </div>
            </div>
          )}
          <div className="upload-btn-wrapper">
            <button className="btn">
              <img src={attachmentIcon} alt="Attachment Icon" />
              Attach file
            </button>
            <input type="file" name="cv" onChange={handleFileChange} />
          </div>
          {isLoading && (
            <button type="submit" className="submit-btn submit-btn--1" disabled>
              <BsArrowUpRight className="arrow--1" />
              <BsArrowUpRight className="arrow--2" />
              <BsArrowUpRight className="arrow--3" />
            </button>
          )}
          {!isLoading && (
            <button type="submit" className="submit-btn">
              <BsArrowUpRight />
              <span>Join our team</span>
            </button>
          )}
        </form>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.lightColor};
  color: ${colors.primaryDarkGray};
  padding: 10rem 0;

  .submit-cv-section {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  h1 {
    font-weight: 600;
    font-size: 46px;
    line-height: 55px;
    text-transform: uppercase;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .upload-btn-wrapper {
      position: relative;
      overflow: hidden;
      align-self: start;
      display: inline-block;

      &:hover {
        cursor: pointer !important;
      }
    }

    .btn {
      cursor: pointer;
      color: ${colors.secondaryDarkGray};
      display: flex;
      align-items: center;
      justify-content: start;
      font-size: 20px;
      font-weight: 600;
      gap: 0.5rem;
      border: none;
      background-color: transparent;
      padding: 0;
      // margin-top: 1rem;

      &:hover {
        cursor: pointer;
      }
    }

    .upload-btn-wrapper span {
      display: inline-block;
      margin-left: 1rem;
      color: ${colors.primaryDarkGray};
      font-size: 16px;
    }

    .upload-btn-wrapper .remove-file-btn {
      margin-left: 10rem;
      background-color: ${colors.primaryRed};
      color: ${colors.lightColor};
      border: none;
      border-radius: 5px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        background-color: green;
      }
    }

    .submit-btn {
      display: flex;
      align-items: center;
      gap: 1rem;
      align-self: start;
      font-size: 18px;
      font-weight: 800;
      text-transform: uppercase;
      padding: 12px 18px;
      border-radius: 16px;
      border: 2px solid transparent;
      background-color: ${colors.secondaryDarkGray};
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.7s;
      width: 230px;
      justify-content: center;
      &:hover {
        background-color: ${colors.lightColor};
        border: 2px solid ${colors.secondaryDarkGray};

        svg {
          animation: joinOurTeamIconEnglish 0.7s forwards;
        }

        span {
          animation: joinOurTeamTextEnglish 0.7s forwards;
        }
      }

      &--1 {
        justify-content: space-around;
        background-color: ${colors.lightColor};
        border: 2px solid ${colors.primaryDarkGray};
        cursor: default;
        svg {
          stroke-width: 1px;
          animation: rotateAndTranslateArrows 3s infinite !important;
        }
      }
    }

    .attached-file {
      display: flex;
      gap: 2rem;
      align-items: center;
      width: 40%;
      justify-content: space-between;

      &__name {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .upload-btn-wrapper input[type="file"] {
      font-size: 100px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }

    input,
    textArea,
    input:-internal-autofill-selected {
      color: ${colors.primaryDarkGray};
      -webkit-text-fill-color: ${colors.primaryDarkGray};
      -webkit-box-shadow: inset 0 0 0 50px ${colors.lightColor};
      outline: none;
      background-color: transparent !important;
      font-size: 24px;
      padding: 1rem;
      padding-left: 0;
      border: none;
      border-bottom: 1px solid ${colors.secondaryDarkGray};
      font-family: "Nunito Sans", sans-serif;

      &::placeholder {
        -webkit-text-fill-color: ${colors.secondaryGray};
      }

      &:focus {
        border-color: ${colors.primaryViolet};
      }

      &.invalid {
        border-color: ${colors.primaryRed};
      }

      &:last-child {
        border: none;
      }
    }

    textArea {
      padding: 0;
    }
  }
`;

export default SubmitCv;
