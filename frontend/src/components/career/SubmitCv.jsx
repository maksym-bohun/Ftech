import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import attachmentIcon from "../../assets/attachmentIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { BsArrowUpRight } from "react-icons/bs";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const SubmitCv = ({ getData, lang }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [cvSent, setCvSent] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [placeholders, setPlaceHolders] = useState({
    name: "Your name*",
    email: "E-mail*",
    phone: "Phone",
    coverLetter: "Cover letter",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  useEffect(() => {
    if (lang === "UA") {
      setPlaceHolders({
        name: "Ваше повне імʼя*",
        email: "Електронна пошта *",
        phone: "Номер телефону",
        coverLetter: "Супровідний лист",
      });
    } else if (lang === "ENG") {
      setPlaceHolders({
        name: "Your name*",
        email: "E-mail*",
        phone: "Phone",
        coverLetter: "Cover letter",
      });
    }
  }, [lang]);

  useEffect(() => {
    if (cvSent) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
      });
      navigate("/formSubmitted", { state: { type: "cv" } });
    }
  }, [cvSent]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleRemoveFile = (e) => {
    setSelectedFile(null);
  };

  const submitFormHandler = async (e) => {
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
      setIsLoading(true);
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("coverLetter", formData.coverLetter);
      formDataObj.append("file", selectedFile);

      try {
        const response = await fetch("http://127.0.0.1:8000/api/sendMailCV", {
          method: "POST",
          body: formDataObj,
        });

        if (response.ok) {
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email");
        }
        setIsLoading(false);
        setCvSent(true);
      } catch (error) {
        console.error("Error sending email", error);
        setIsLoading(false);
      }
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
          {lang === "ENG" && (
            <>
              <h1>Submit </h1>
              <h1>cv</h1>
            </>
          )}
          {lang === "UA" && (
            <>
              <h1>відправити </h1>
              <h1>cv</h1>
            </>
          )}
        </div>
        <form onSubmit={submitFormHandler}>
          <input
            onChange={changeInputHandler}
            type="text"
            name="name"
            placeholder={placeholders.name}
            ref={nameInputRef}
          />
          <input
            onChange={changeInputHandler}
            type="email"
            name="email"
            placeholder={placeholders.email}
            ref={emailInputRef}
          />
          <input
            onChange={changeInputHandler}
            type="tel"
            name="phone"
            placeholder={placeholders.phone}
          />
          <textarea
            onChange={changeInputHandler}
            name="coverLetter"
            placeholder={placeholders.coverLetter}
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
              {lang === "UA" && <span>Додати файл</span>}
              {lang === "ENG" && <span>Attach file</span>}
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
            <button
              type="submit"
              className={`submit-btn ${lang === "UA" ? "ua" : ""}`}
            >
              <BsArrowUpRight />
              {lang === "UA" && <span>доєднатись до команди</span>}
              {lang === "ENG" && <span>Join our team</span>}
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
      cursor: pointer !important;
      font-size: 24px;

      span {
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
      // margin-left: 1rem;
      color: ${colors.primaryDarkGray};
      cursor: pointer;
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

      &.ua {
        width: 350px;
        &:hover {
          svg {
            animation: joinOurTeamIconUA 0.7s forwards;
          }

          span {
            animation: joinOurTeamText 0.7s forwards;
          }
        }
      }

      &:hover {
        background-color: ${colors.lightColor};
        border: 2px solid ${colors.secondaryDarkGray};

        svg {
          animation: joinOurTeamIconEnglish 0.7s forwards;
        }

        span {
          animation: joinOurTeamText 0.7s forwards;
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
      width: 100% !important;
    }
  }

  @media screen and (max-width: 999px) {
    .submit-cv-section {
      width: 90%;
      margin: 0 auto;
      grid-template-columns: 35% 65%;
      gap: 2rem;
    }

    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
    }

    input {
      &:nth-child(1) {
        padding-top: 0;
      }
    }
  }

  @media screen and (max-width: 770px) {
    padding: 6rem 0;
    .submit-cv-section {
      grid-template-columns: 1fr;
      gap: 5rem;
    }

    h1 {
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
    }

    input {
      &:nth-child(1) {
        padding-top: 0;
      }
    }
  }

  @media screen and (max-width: 550px) {
    .submit-cv-section {
      gap: 3rem;
    }
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 28.8px;
    }
  }
`;

export default SubmitCv;
