import React, { useContext, useState, useEffect } from "react";

import SectionTitle from "./SectionTitle";
import Product from "./Product";
import { ProductsContext } from "../context/ProductsContext";
import spinner from "../utils/spinner";
import host from "../utils/host";

const Featured = () => {
  const products = useContext(ProductsContext).data;
  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (products !== undefined) {
      setFeatured(products.filter((item) => item.featured === true));
    }
  }, [products]);

  return (
    <React.Fragment>
      <section>
        <SectionTitle titleText={"Featured"} />
        {featured ? (
          <div className="grid-container">
            {featured.map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  imgSrc={`${
                    host === "http://localhost:1337"
                      ? "http://localhost:1337"
                      : ""
                  }${product.photo.formats.medium.url}`}
                  alternativeTxt={product.photo.alternativeText}
                  name={product.name}
                  price={product.price}
                  categorySlug={product.categories[0].slug}
                  productSlug={product.slug}
                />
              );
            })}
          </div>
        ) : (
          <img className="spinner" src={spinner} alt="Spinner" />
        )}
      </section>

      <style jsx>{`
        section {
          background: white;
          padding: 1px 0;
        }

        .grid-container {
          margin-top: 2em;
          height: 350px;
          display: grid;
          grid-auto-flow: row;
          grid-template-columns: 1fr 1fr 1fr;
        }

        @media screen and (max-width: 900px) {
          section {
            height: 840px;
          }

          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 700px) {
          section {
            height: 1170px;
          }

          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;
