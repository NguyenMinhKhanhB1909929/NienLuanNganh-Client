import React from "react";
import { Link } from "react-router-dom";

function PayFail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header--fail">
              <div className="check">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
            <div className="content">
              <h1>Payment Failed !</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.{" "}
              </p>
              <Link to="/" className="mx-2">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayFail;
