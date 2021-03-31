import React from "react";
import Link from "next/link";

import Layout from "../../../components/Layout";

const CheckoutSuccessPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <div className="checkout-success-container">
          <h1>Your Order has been sent to the Company!</h1>
          <Link href={"/"}>
            <p>Return to Home</p>
          </Link>
        </div>
      </Layout>

      <style jsx>{`
        .checkout-success-container {
          width: 70%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h1 {
          text-align: center;
        }

        p {
          margin-top: 20px;
          text-decoration: underline;
          color: grey;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CheckoutSuccessPage;
