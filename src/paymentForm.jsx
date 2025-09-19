import React from "react";
import "./paymentForm.css";
import cards from "./assets/imgcards.png";

export default function paymentForm() {
  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="column">
              <h3 className="title">Billing Address</h3>
              <div className="input-box">
                <span>Full Name</span>
                <input type="text" placeholder="Cindy Aristawati" />
              </div>
              <div className="input-box">
                <span>Email</span>
                <input type="email" placeholder="Cindyaristawati@gmail.com" />
              </div>
              <div className="input-box">
                <span>Address</span>
                <input type="text" placeholder="Tangerang Selatan" />
              </div>
              <div className="input-box">
                <span>City</span>
                <input type="text" placeholder="Tangerang Selatan" />
              </div>

              <div className="flex">
                <div className="input-box">
                  <span>State</span>
                  <input type="text" placeholder="Indonesia" />
                </div>
                <div className="input-box">
                  <span>Zip Code</span>
                  <input type="number" placeholder="123456" />
                </div>
              </div>
            </div>

            <div className="column">
              <h3 className="title">Payment</h3>
              <div className="input-box">
                <span>Cards Accepted</span>
                <img src={cards} alt="" />
              </div>
              <div className="input-box">
                <span>Name On Card</span>
                <input type="text" placeholder="Cindy Aristawati" />
              </div>
              <div className="input-box">
                <span>Credit Card Number</span>
                <input type="number" placeholder="1111 2222 3333 4444" />
              </div>
              <div className="input-box">
                <span>Exp. Month</span>
                <input type="text" placeholder="August" />
              </div>

              <div className="flex">
                <div className="input-box">
                  <span>Exp. Year</span>
                  <input type="number" placeholder="2025" />
                </div>
                <div className="input-box">
                  <span>CVV</span>
                  <input type="number" placeholder="123" />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
