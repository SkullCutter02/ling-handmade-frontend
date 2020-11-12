import React from "react";

const SectionTitle = ({ titleText }) => {
  return (
    <div>
      <h1>{titleText}</h1>
      <div className="line" />

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 3rem;
          margin-top: 1em;
        }

        .line {
          width: 70px;
          margin: 0 auto;
          padding-top: 5px;
          border-bottom: 4px solid #af9b7d;
        }

        @media screen and (max-width: 700px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionTitle;
