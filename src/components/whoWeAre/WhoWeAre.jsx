import React from "react";
import styled from "styled-components";
import Services from "./Services";

const WhoWeAre = ({ lang }) => {
  return (
    <Container>
      <div className="centered">
        {lang === "UA" && (
          <>
            <h1 className="section-header">Хто ми?</h1>
            <div className="description">
              FTech [first technologies] –{" "}
              <span className="green">Ваш вірний союзник</span> у розробці
              програмного забезпечення <div className="next-line--sm"></div> та
              CRM-систем. <span className="italic violet ">Ми створюємо</span>{" "}
              бізнес-орієнтовані
              <span className="next-line sm"></span>
              <span className="next-line sm"></span> веб- та мобільні додатки і
              пропонуємо їх бездоганне впровадження, експертну підтримку та
              індивідуальні рекомендації.
            </div>
          </>
        )}
        {lang === "ENG" && (
          <>
            <h1 className="section-header">Get a closer look</h1>
            <div className="description">
              FTech first technologies is{" "}
              <span className="green">your trusted ally</span> in software and
              CRM development. <span className="italic violet">We craft</span>{" "}
              business-centric web and mobile applications and offer their
              flawless implementation, expert support, and individual
              recommendations.
            </div>
          </>
        )}
      </div>
      <Services />
    </Container>
  );
};

const Container = styled.section`
  margin-bottom: 0;
  display: flex;
  flex-direction: column;

  .description {
    padding-top: 1rem;
    font-size: 36px;
    font-weight: 600;
    line-height: 46.8px;
    letter-spacing: 1.8%;
    text-transform: uppercase;
    margin-right: 7rem;
  }

  .next-line {
    margin-right: 4rem;
  }

  @media screen and (min-width: 1800px) {
    padding-bottom: 1.2rem;
    gap: 6rem;

    .description {
      margin-right: 17rem;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    .next-line {
      margin-right: 5rem;
    }

    .description {
      margin-right: 3rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .description {
      padding-top: 1rem;
      font-size: 20px;
      line-height: 26px;
      margin-right: 0;
    }

    .next-line.sm {
      margin: 0;
    }

    .next-line--sm {
      margin-right: 2rem;
    }
  }
`;

export default WhoWeAre;
