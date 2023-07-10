import React from "react";
import { Link, useHistory } from "react-router-dom";

function AdvisorListing() {
  return (
    <div className="col-sm-12 p-0">
      <div className="col-sm-12 p-0 mt-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-12 card_style_advisor p-4">
              <div className="row">
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/microacquire.appspot.com/o/users%2FDD464xQfFkgpZBi1qoydccNKARE2%2Favatar?alt=media&token=ac493e3c-3e74-40f7-b657-8a5688534207"
                        className="img-fluid rounded-circle img_width_advisor"
                      />
                    </div>
                    <div className="col-sm-9 pl-0 m-auto">
                      <div className="col-sm-12 fontcolor_name pt-2">
                        <h6>
                          <b>Mina Fung</b>{" "}
                          <badge className="badge badge-light background_badge px-2 rounded-pill">
                            Top Closer
                          </badge>
                        </h6>
                      </div>
                      <div className="col-sm-12 fontcolor_name">
                        <h6>M&A Advisor - I help you close on an offer.</h6>
                      </div>
                      <div className="col-sm-12 ">
                        <p className="font_subtitle_advisor">
                          Vancouver, BC, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="col-sm-12 mb-3">
                      <p className="font_subtitle_advisor m-0">Expertise</p>
                    </div>
                    <div className="col-sm-12 fontcolor_name">
                      <h6>
                        M&A, Due Diligence, Valuation, Accounting, Negotiations
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Preferred deal size
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>$100K - $5M </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            On Nami since
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>October 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Deals closed
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-2 text-right pt-2">
                  <p className="linkedin_text">LinkedIn</p>
                </div>
                <div className="col-sm-12">
                  <hr className="background_line" />
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <Link to="/view-profile">
                        {" "}
                        <button className="btn btn-light profile_advisor px-3">
                          {" "}
                          View profile{" "}
                        </button>{" "}
                      </Link>
                    </div>
                    <div className="col-sm-6 text-right">
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-heart"></i>{" "}
                        </button>
                      </span>
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-eye-slash"></i>{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="col-sm-12 card_style_advisor p-4">
              <div className="row">
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/microacquire.appspot.com/o/users%2F1UXJE3m1FMN8kYX2eB67EyMWct43%2Favatar?alt=media&token=651b7a91-e9e9-46c0-857c-b6725b7563a3"
                        className="img-fluid rounded-circle img_width_advisor"
                      />
                    </div>
                    <div className="col-sm-9 pl-0 m-auto">
                      <div className="col-sm-12 fontcolor_name pt-2">
                        <h6>
                          <b>Mina Fung</b>{" "}
                          <badge className="badge badge-light background_badge px-2 rounded-pill">
                            Top Closer
                          </badge>
                        </h6>
                      </div>
                      <div className="col-sm-12 fontcolor_name">
                        <h6>M&A Advisor - I help you close on an offer.</h6>
                      </div>
                      <div className="col-sm-12 ">
                        <p className="font_subtitle_advisor">
                          Vancouver, BC, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="col-sm-12 mb-3">
                      <p className="font_subtitle_advisor m-0">Expertise</p>
                    </div>
                    <div className="col-sm-12 fontcolor_name">
                      <h6>
                        M&A, Due Diligence, Valuation, Accounting, Negotiations
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Preferred deal size
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>$100K - $5M </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            On Nami since
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>October 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Deals closed
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-2 text-right pt-2">
                  <p className="linkedin_text">LinkedIn</p>
                </div>
                <div className="col-sm-12">
                  <hr className="background_line" />
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <button className="btn btn-light profile_advisor px-3">
                        {" "}
                        View profile{" "}
                      </button>
                    </div>
                    <div className="col-sm-6 text-right">
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-heart"></i>{" "}
                        </button>
                      </span>
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-eye-slash"></i>{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4">
            <div className="col-sm-12 card_style_advisor p-4">
              <div className="row">
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/microacquire.appspot.com/o/users%2FRyzamvaOQibdbWDKFbWNiInvuiM2%2Favatar?alt=media&token=2ef2c3e1-41b1-4261-8125-40f0f4ad50ab"
                        className="img-fluid rounded-circle img_width_advisor"
                      />
                    </div>
                    <div className="col-sm-9 pl-0 m-auto">
                      <div className="col-sm-12 fontcolor_name pt-2">
                        <h6>
                          <b>Mina Fung</b>{" "}
                          <badge className="badge badge-light background_badge px-2 rounded-pill">
                            Top Closer
                          </badge>
                        </h6>
                      </div>
                      <div className="col-sm-12 fontcolor_name">
                        <h6>M&A Advisor - I help you close on an offer.</h6>
                      </div>
                      <div className="col-sm-12 ">
                        <p className="font_subtitle_advisor">
                          Vancouver, BC, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="col-sm-12 mb-3">
                      <p className="font_subtitle_advisor m-0">Expertise</p>
                    </div>
                    <div className="col-sm-12 fontcolor_name">
                      <h6>
                        M&A, Due Diligence, Valuation, Accounting, Negotiations
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Preferred deal size
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>$100K - $5M </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            On Nami since
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>October 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Deals closed
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-2 text-right pt-2">
                  <p className="linkedin_text">LinkedIn</p>
                </div>
                <div className="col-sm-12">
                  <hr className="background_line" />
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <button className="btn btn-light profile_advisor px-3">
                        {" "}
                        View profile{" "}
                      </button>
                    </div>
                    <div className="col-sm-6 text-right">
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-heart"></i>{" "}
                        </button>
                      </span>
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-eye-slash"></i>{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4">
            <div className="col-sm-12 card_style_advisor p-4">
              <div className="row">
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-3">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/microacquire.appspot.com/o/users%2FpmAd99On0Ren6LvAcHSspz2I27b2%2Favatar?alt=media&token=26187108-49bc-4cc7-aa37-dd6c289f38f4"
                        className="img-fluid rounded-circle img_width_advisor"
                      />
                    </div>
                    <div className="col-sm-9 pl-0 m-auto">
                      <div className="col-sm-12 fontcolor_name pt-2">
                        <h6>
                          <b>Mina Fung</b>{" "}
                          <badge className="badge badge-light background_badge px-2 rounded-pill">
                            Top Closer
                          </badge>
                        </h6>
                      </div>
                      <div className="col-sm-12 fontcolor_name">
                        <h6>M&A Advisor - I help you close on an offer.</h6>
                      </div>
                      <div className="col-sm-12 ">
                        <p className="font_subtitle_advisor">
                          Vancouver, BC, Canada
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="col-sm-12 mb-3">
                      <p className="font_subtitle_advisor m-0">Expertise</p>
                    </div>
                    <div className="col-sm-12 fontcolor_name">
                      <h6>
                        M&A, Due Diligence, Valuation, Accounting, Negotiations
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 p-0 pt-4">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Preferred deal size
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>$100K - $5M </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            On Nami since
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>October 2021</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="col-sm-12 ">
                          <p className="font_subtitle_advisor1 mb-1">
                            Deals closed
                          </p>
                        </div>
                        <div className="col-sm-12 fontcolor_name1">
                          <p>18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-2 text-right pt-2">
                  <p className="linkedin_text">LinkedIn</p>
                </div>
                <div className="col-sm-12">
                  <hr className="background_line" />
                </div>
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6">
                      <button className="btn btn-light profile_advisor px-3">
                        {" "}
                        View profile{" "}
                      </button>
                    </div>
                    <div className="col-sm-6 text-right">
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-heart"></i>{" "}
                        </button>
                      </span>
                      <span>
                        {" "}
                        <button className="btn btn-light profile_advisor1 px-3">
                          {" "}
                          <i className="fas fa-eye-slash"></i>{" "}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisorListing;
