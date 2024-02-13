import React, { useState } from "react";
import "./Style/Style.css";

const Card = ({ item, index, setCartCount, CartCount }) => {
  const [Status, setStatus] = useState(true);
  const CartAdd = () => {
    setStatus(false);
    setCartCount((CartCount = CartCount + 1));
  };
  const CartRemove = () => {
    setStatus(true);
    setCartCount((CartCount = CartCount - 1));
  };
  return (
    <div key={index}>
      <div class="col mb-5">
        <div class="card h-100">
          {/* {item.Sale ? (
                            <>
                              <div
                                class="badge bg-dark text-white position-absolute"
                                style="top: 0.5rem; right: 0.5rem"
                              >
                                Sale
                              </div>
                            </>
                          ) : (
                            ""
                          )} */}
          {/* <!-- Product image--> */}
          <img class="card-img-top bg-white " src={item.Img} alt="..."></img>
          {/* <!-- Product details--> */}
          <div class="card-body p-4">
            <div class="text-center">
              {/* <!-- Product name--> */}
              <h5 class="fw-bolder">{item.Product}</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class={item.Rating}></div>
                <div class={item.Rating}></div>
                <div class={item.Rating}></div>
                <div class={item.Rating}></div>
                <div class={item.Rating}></div>
                {/* <br></br> */}
              </div>
              {/* <!-- Product price--> */}
              <span class="text-muted text-decoration-line-through">
                {item.Off}
              </span>
              &nbsp;{item.Price}
            </div>
          </div>

          {/* <!-- Product actions--> */}
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              {Status ? (
                <button
                  class="btn btn-outline-primary mt-auto"
                  href="#"
                  onClick={CartAdd}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  class="btn btn-outline-danger mt-auto"
                  href="#"
                  onClick={CartRemove}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
