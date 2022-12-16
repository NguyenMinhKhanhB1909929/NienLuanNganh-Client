import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark text-light mt-5">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Welcome Kdemy</h5>
            <span>Upskill your team with Kdemy Business</span>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Carrers</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Help and support
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Investors
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Terms</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#!" className="text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Cookie settings
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Accessibility statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright: Nguyễn Minh Khánh B1909929
      </div>
    </footer>
  );
}

export default Footer;
