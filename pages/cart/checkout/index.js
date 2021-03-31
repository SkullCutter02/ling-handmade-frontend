import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as emailjs from "emailjs-com";

import Layout from "../../../components/Layout";
import { CartContext } from "../../../context/CartContext";
import host from "../../../utils/host";
import SimpleInput from "../../../components/SimpleInput";
import SpinnerButton from "../../../components/SpinnerButton";

const CheckoutPage = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const cartContext = useContext(CartContext);

  const router = useRouter();

  const findAmount = (cartItem) => {
    return cartContext.cartItemsAmount[
      cartContext.cartItems.findIndex(
        (cartContextItem) => cartContextItem.name === cartItem.name
      )
    ];
  };

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER);
  }, []);

  useEffect(() => {
    if (cartContext !== undefined) {
      if (cartContext.cartItems.length > 0) {
        let accumulator = 0;
        cartContext.cartItems.forEach((item) => {
          accumulator += item.price * findAmount(item);
        });
        setTotalCost(accumulator);
      } else {
        setTotalCost(0);
      }
    }
  }, [cartContext]);

  const getEmailBody = () => {
    let str = "";

    cartContext.cartItems.forEach((cartItem) => {
      str += `Item: ${cartItem.name} || Amount: ${findAmount(
        cartItem
      )} || Total Price: ${cartItem.price * findAmount(cartItem)}<br/>`;
    });

    return str;
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send("service_i431z9z", "template_6wfy1x6", {
        name: e.target.name.value.trim(),
        contact_email: e.target.contact_email.value.trim(),
        address: e.target.address.value.trim(),
        message: getEmailBody(),
        total_cost: totalCost,
      });

      cartContext.resetCart();
      setTotalCost(0);
      await router.push("/cart/checkout/success");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="checkout-container">
          {cartContext &&
            cartContext.cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.uuid}>
                <img
                  className="item-img"
                  src={`${
                    host === "http://localhost:1337"
                      ? "http://localhost:1337"
                      : ""
                  }${cartItem?.photo.formats.small.url}`}
                  alt={cartItem?.photo.alternativeText}
                />
                <div className="text">
                  <h1 className="product-name">{cartItem.name}</h1>
                  <p className="product-amt">Amount: {findAmount(cartItem)}</p>
                  <p className="product-cost">
                    Cost: ${cartItem.price * findAmount(cartItem)}
                  </p>
                </div>
              </div>
            ))}

          {totalCost > 0 && (
            <form className="cart-info" onSubmit={placeOrder}>
              <SimpleInput placeholder={"Name: "} name={"name"} margin={15} />
              <SimpleInput
                placeholder={"Contact Email: "}
                name={"contact_email"}
                inputType={"email"}
                margin={15}
              />
              <SimpleInput
                placeholder={"Hong Kong Address: "}
                name={"address"}
                margin={15}
              />
              <div className="total-and-confirm">
                <h4 className="total">Total Cost: ${totalCost}</h4>
                <SpinnerButton
                  text={"Confirm Place Order"}
                  isLoading={isLoading}
                  buttonType={"submit"}
                />
              </div>
            </form>
          )}
        </div>
      </Layout>

      <style jsx>{`
        .checkout-container {
          width: 65%;
          margin: 70px auto;
          border: 0.7px solid #000;
          padding: 30px 40px;
        }

        img {
          max-width: 50%;
          width: auto;
        }

        .cart-item {
          display: flex;
        }

        .cart-item:not(:last-child) {
          margin-bottom: 40px;
        }

        .text {
          margin-left: 30px;
        }

        .text h1,
        .text p {
          margin-bottom: 10px;
        }

        .product-name {
          font-size: clamp(1.4rem, 2vw, 3rem);
          min-font-size: 1.5rem;
        }

        .cart-info {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .total-and-confirm {
          display: flex;
          align-items: center;
        }

        .confirm-place-order-btn {
          cursor: pointer;
          min-width: 130px;
          height: 25px;
          border: none;
          font-size: 0.6rem;
          margin: 10px 20px;
          border-radius: 6px;
          color: #fff;
          background: #15cb15;
        }

        .confirm-place-order-btn:hover {
          background: #16ae16;
        }

        @media screen and (max-width: 800px) {
          .checkout-container {
            width: 75%;
          }

          .cart-item {
            flex-direction: column;
          }

          img {
            max-width: 100%;
          }

          .text {
            margin-top: 30px;
            margin-left: 0;
          }
        }

        @media screen and (max-width: 600px) {
          .checkout-container {
            width: 85%;
            padding: 20px 30px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default CheckoutPage;
