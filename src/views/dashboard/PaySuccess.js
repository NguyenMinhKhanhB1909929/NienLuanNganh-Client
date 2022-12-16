import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CourseContext } from "../../contexts/CourseContext";
import { AuthContext } from "../../contexts/AuthContext";

function PaySuccess() {
  const { addCourseToUser } = useContext(AuthContext);
  const { recieveMoney } = useContext(CourseContext);
  let { cost, id, lessonId } = useParams();
  const queryString = window.location.search;
  useEffect(() => {
    recieveMoney(cost, queryString);
    addCourseToUser(id);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header--success">
              <div className="check">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
            <div className="content">
              <h1>Payment Success !</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.{" "}
              </p>
              <Link to="/" className="mx-2">
                Go to Home
              </Link>
              <Link to={`/learn/${id}/${lessonId}`} className="mx-2">
                Lean now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
