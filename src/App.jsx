import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./components/navigation/Navigation";
import { colors } from "./styles/colors";
import AboutUs from "./components/AboutUs/AboutUs";
import Portfolio from "./components/portfolio/Portfolio";
import backgroundTriangle1 from "./assets/backgroundTriangle1.svg";
import backgroundTriangle2 from "./assets/backgroundTriangle2.svg";
import backgroundTriangle3 from "./assets/backgroundTriangle3.svg";
import backgroundTriangle4 from "./assets/backgroundTriangle4.svg";
import backgroundTriangle5 from "./assets/backgroundTriangle5.svg";
import backgroundTriangle6 from "./assets/backgroundTriangle6.svg";
import backgroundTriangle7 from "./assets/backgroundTriangle7.svg";
import backgroundTriangle8 from "./assets/backgroundTriangle8.svg";
import backgroundTriangle9 from "./assets/backgroundTriangle9.svg";
import backgroundTriangle10 from "./assets/backgroundTriangle10.svg";
import backgroundTriangle11 from "./assets/backgroundTriangle11.svg";
import backgroundTriangle12 from "./assets/backgroundTriangle12.svg";
import backgroundTriangle13 from "./assets/backgroundTriangle13.svg";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import ForWho from "./components/forWho/ForWho";
import AboutCompany from "./components/whoWeAre/AboutCompany";
import WhyWe from "./components/whyWe/WhyWe";
import Advantages from "./components/advantages/Advantages";
import Services from "./components/services/Services";
import ConnectLine from "./components/advantages/ConnectLine";
import OurTeam from "./components/ourTeam/OurTeam";
import Reviews from "./components/reviews/Reviews";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";
import MailImage from "./components/aboutUs/MailImage";

function App() {
  const aboutUsRef = useRef(null);
  const mailImageRef = useRef(null);
  const [mailImageIsVisible, setMailImageIsVisible] = useState(false);
  const [mailBounce, setMailBounce] = useState(false);

  setInterval(() => {
    setMailBounce(true);
  }, 20000);

  setInterval(() => {
    setMailBounce(false);
  }, 22100);

  const scrollHandler = () => {
    // console.log(window.innerHeight);
    if (window.scrollY > aboutUsRef.current.scrollHeight - 100)
      setMailImageIsVisible(true);
    else {
      setMailImageIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Container>
      {mailImageIsVisible && (
        <div
          className={`mail-image ${mailBounce ? "animated" : ""} `}
          ref={mailImageRef}
        >
          <MailImage text={false} />
        </div>
      )}

      <div className="dark dark--1">
        <img
          src={backgroundTriangle1}
          alt="background triangle"
          className="triangle triangle--1"
        />
        <img
          src={backgroundTriangle2}
          alt="background triangle"
          className="triangle triangle--2"
        />
        <img
          src={backgroundTriangle3}
          alt="background triangle"
          className="triangle triangle--3"
        />
        <Header />
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
        <WhoWeAre />
      </div>
      <div className="light light--1">
        <img
          src={backgroundTriangle4}
          className="triangle triangle--4"
          alt="background triangle"
        />
        <AboutCompany />
        <ForWho />
        <WhyWe />
      </div>
      <div className="dark dark--2">
        <img
          src={backgroundTriangle5}
          alt="background triangle"
          className="triangle triangle--5"
        />
        <img
          src={backgroundTriangle6}
          alt="background triangle"
          className="triangle triangle--6"
        />
        <img
          src={backgroundTriangle7}
          alt="background triangle"
          className="triangle triangle--7"
        />
        <img
          src={backgroundTriangle8}
          alt="background triangle"
          className="triangle triangle--8"
        />
        <Advantages />
        <ConnectLine />
      </div>

      <div className="light">
        <Services />
      </div>

      <div className="dark dark--3">
        <img
          src={backgroundTriangle9}
          alt="background triangle"
          className="triangle triangle--9"
        />
        <img
          src={backgroundTriangle10}
          alt="background triangle"
          className="triangle triangle--10"
        />
        <img
          src={backgroundTriangle11}
          alt="background triangle"
          className="triangle triangle--11"
        />
        <OurTeam />
      </div>

      <div className="light">
        <Reviews />
      </div>

      <div className="dark dark--4">
        <img
          src={backgroundTriangle12}
          alt="background triangle"
          className="triangle triangle--12"
        />
        <img
          src={backgroundTriangle13}
          alt="background triangle"
          className="triangle triangle--13"
        />
        <ContactUs />
      </div>

      <Footer />
    </Container>
  );
}

const Container = styled.main`
  font-family: "Nunito Sans", sans-serif;
  overflow-x: hidden;
  margin: 0;

  .mail-image {
    position: fixed;
    bottom: 5%;
    right: -1%;
    z-index: 100;
    transform: scale(70%);
    opacity: 1;
    transition: all 0.3s;
  }

  .animated {
    animation: bounce 2s infinite;
  }

  .dark {
    background: ${colors.primaryDarkGray};
    position: relative;

    .triangle {
      position: absolute;
    }

    &--1 {
      background: linear-gradient(to bottom, #1c1c1c, #1c1c1c 60%, #36353c);

      .triangle {
        z-index: 1;

        &--2 {
          top: 26.5rem;
        }
        &--3 {
          right: 0;
          top: 10rem;
        }
      }

      * {
        z-index: 2;
      }
    }

    &--2 {
      background: ${colors.primaryDarkGray};
      min-height: 49.5rem;

      .triangle {
        z-index: 1;

        &--5 {
          top: -7%;
        }
        &--6 {
          top: 23%;
        }
        &--7 {
          top: 17.5%;
          left: 13%;
        }
        &--8 {
          top: 49%;
          top: 51%;
          left: 2%;
        }
      }
    }

    &--3 {
      * {
        z-index: 2;
      }

      .triangle {
        z-index: 0;

        &--10 {
          top: 9rem;
          right: 0;
        }
        &--11 {
          bottom: 0;
          left: 24.6rem;
        }
      }
    }

    &--4 {
      .triangle {
        &--12 {
          right: 0;
        }

        &--13 {
          bottom: 0;
        }
      }
    }
  }

  .light {
    background-color: ${colors.lightColor};
    position: relative;
    color: ${colors.primaryDarkGray};
    &--1 {
      z-index: 2;
      .triangle {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
      }
    }
  }
`;

export default App;
