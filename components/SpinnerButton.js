import React from "react";

import Spinner from "./Spinner";

const SpinnerButton = ({
  text,
  isLoading,
  buttonType = "button",
  fontSize = 0.7,
  paddingTb = 3,
  paddingLr = 10,
}) => {
  return (
    <React.Fragment>
      <button type={buttonType}>
        {isLoading ? (
          <div>
            <Spinner size={10} />
          </div>
        ) : (
          <p>{text}</p>
        )}
      </button>

      <style jsx>{`
        button {
          margin-top: 20px;
          min-width: 120px;
          min-height: 30px;
          padding: ${paddingTb}px ${paddingLr}px;
          border: none;
          border-radius: 4px;
          background: #16ba5d;
          color: #fff;
          cursor: pointer;
          font-size: ${fontSize}rem;
          margin-left: 30px;
          transform: translateY(-10px);
        }

        button:hover {
          background: #13a451;
        }

        div {
          position: relative;
        }
      `}</style>
    </React.Fragment>
  );
};

export default SpinnerButton;
