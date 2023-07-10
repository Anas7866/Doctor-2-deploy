import React, { useState } from "react";
import "./Navgetintouch.scss";
import { Link } from "react-router-dom";

function Navgetintouch() {
  const [open, setOpen] = useState(true);

  const changestate = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="col-md-12 background_color_header_public1122 py-4">
        <div className="col-md-12 custome_main_setting_for_every_page navigation_for_laptop">
          <div className="row">
            <div className="col-md-1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img className="img-fluid logo_width" src="../images/logo.png" />
              </Link>
            </div>
            <div className="col-md-6 text-center m-auto">
              <div className="row">
                <div className="col-md-3">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <p className="mb-0 font_header">Home</p>{" "}
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <p className="mb-0 font_header">How it work</p>{" "}
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <p className="mb-0 font_header">About Us</p>{" "}
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link
                    to="/getintouch"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <p className="mb-0 font_header">Contact Us</p>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 m-auto">
              <div className="row">
                <div className="col-md-8"></div>
                <div className="col-md-4 text-right">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <span>
                      <img
                        className="img-fluid width_bell11"
                        src="../images/bell2.png"
                      />
                    </span>{" "}
                    &nbsp;
                    <span>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <img
                        className="img-fluid img_avatar_set"
                        src="../images/avatar.png"
                      />
                      </Link>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation  */}
        <div className="col-md-12 custome_main_setting_for_every_page navigation_for_mobile">
          <div className="row">
            <div className="col-md-6 col-6">
              <span>
                <img
                  className="img-fluid logo_width_for_mobile"
                  src="../images/logo.png"
                />
              </span>
            </div>
            <div className="col-md-6 col-6 text-right m-auto">
              <button className="btn btn-light" onClick={changestate}>
                {open ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="fas fa-bars"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className="col-md-12 dropdown_mob">
          <div className="col-md-12 mt-4">
            <Link to="/login">
              <button className="btn btn-light w-100">
                <b>Login </b>{" "}
              </button>
            </Link>
            <Link to="/getintouch">
              <button className="btn btn-light w-100 mt-3">
                <b>Get In Touch </b>{" "}
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navgetintouch;
