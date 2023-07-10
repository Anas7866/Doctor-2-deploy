import React, { useState } from "react";
import InputField from "../../../../../Shared/InputField";
import SelectField from "../../../../../Shared/SelectField/SelectField";
import "./Summary.scss";

function Summary() {
  const [show, setShow] = useState(true);
  const [showCompany , setShowCompany ] = useState(true);
  const [showAcquisition  , setShowAcquisition  ] = useState(true);


  return (
    <div className="col-sm-12 background_summary py-4">
      <div className="col-sm-12 px-4">
        <div className="row">
          <div className="col-sm-6">
            <h5>
              <b>Summary</b>
            </h5>
            <p className="para_summary">
              <b>
                A public introduction to your startup, growth opportunity, and
                reason for selling.
              </b>
            </p>
          </div>
          <div className="col-sm-5 text-right pt-2">
            <span>
              <badge className="badge badge-light badge_draft_style py-2 px-2">
                Draft
              </badge>
            </span>
          </div>
          <div className="col-sm-1">
            <div className="col-sm-12 pl-0">
              <span className="">
                <div class="dropdown ">
                  <button
                    class="btn btn-light button_draft_style py-2 px-3 "
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    <i class="fas fa-ellipsis-v"></i>{" "}
                  </button>
                  <div class="dropdown-menu dropdown-menu-right dropdown-style px-2 mt-2 pt-2">
                    <p className="para_option mb-1">
                      <b>Archive startup</b>
                    </p>
                    <p className="para1_option">
                      Permanently deactivates your listing and account. Archives
                      all requests and chat conversations.
                    </p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* <----------------  Tell us about your startup card -------------------> */}
        <div className="col-sm-12 border_startup py-5">
          <div className="col-sm-12 text-center">
            <p className="font-size-startup mb-1">
              <b>Tell us about your startup</b>
            </p>
            <p className="font-size-startup1">
              <b>General information that every buyer needs.</b>
            </p>
          </div>

          {show ? (
            <div className="col-sm-12 text-center">
              <button
                onClick={() => setShow(!show)}
                className="btn btn-light btn_start_style"
              >
                {" "}
                Add information <i class="fas fa-arrow-right"></i>{" "}
              </button>
            </div>
          ) : (
            <div className="col-sm-12">
              <hr className="line_summary" />
              <div className="col-sm-12 pl-0">
                <h6 className="gernal_setup mb-1 pt-2">
                  <b>General startup information</b>
                </h6>
                <h6 className="gernal_setup1 pb-2">
                  <b>
                    <i class="fas fa-exclamation-circle"></i> All fields are
                    required
                  </b>
                </h6>
              </div>
              <div className="col-sm-12 pt-3 pb-2 pl-2 gernal_setup3 mb-3">
                <p className="gernal_setup2">
                  <i>
                    MicroAcquire may update your listing details to better
                    reflect your
                    <br /> startup and improve its chances of acquisition
                  </i>
                </p>
              </div>

              <div className="col-sm-12 pl-0 pr-0">
                <label className="label_login gernal_setup2 m-0 pt-3">
                  Date founded
                </label>
                <div className="row pt-2">
                  <div className="col-sm-8">
                    <SelectField
                      isMulti
                      placeholder="Select"
                      name="expertise"
                      //   options={adviserDropdownValues?.expertiseList}
                    />
                  </div>
                  <div className="col-sm-4">
                    <SelectField
                      isMulti
                      placeholder="Select"
                      name="expertise"
                      //   options={adviserDropdownValues?.expertiseList}
                    />
                  </div>
                </div>

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Startup team size
                </label>
                <InputField
                  placeholder="Samantha_Nader@hotmail.com"
                  name="Startup team size"
                />

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Startup type
                </label>
                <SelectField
                  isMulti
                  placeholder="Select"
                  name="expertise"
                  //   options={adviserDropdownValues?.expertiseList}
                />

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Location
                </label>
                <InputField
                  placeholder="Enter the company where your startup is located"
                  name="email"
                />

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Headline
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter the headline of your startup"
                ></textarea>

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Description
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter the Description of your startup"
                ></textarea>

                <label className="label_login gernal_setup2 m-0 pt-3">
                  Asking price
                </label>
                <InputField placeholder="Enter asking price" name="email" />
              </div>
              <div className="col-sm-12 pt-3 pb-2 pl-2 gernal_setup4 mb-3">
                <div className="row">
                  <div className="col-sm-1 text-center pr-0">
                    <i class="fas fa-handshake"></i>
                  </div>
                  <div className="col-sm-11">
                    <p className="gernal_setup2 mb-2">
                      <b>Want an accurate valuation?</b>
                    </p>
                    <p className="gernal_setup2">
                      MicroAcquire may update your listing details to better
                      reflect your
                      <br /> startup and improve its chances of acquisition
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                <label className="label_login gernal_setup2 m-0 pt-2 pb-2">
                  Asking price reasoning
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter reasoning"
                ></textarea>
              </div>

              <span>
                {" "}
                <button
                  onClick={() => setShow(!show)}
                  className="btn btn-light btn_start_style1"
                >
                  {" "}
                  Close{" "}
                </button>{" "}
              </span>
              <span>
                {" "}
                <button
                  onClick={() => setShow(!show)}
                  className="btn btn-light btn_start_style5 py-2"
                >
                  {" "}
                  Save <i class="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </span>
            </div>
          )}
        </div>
         {/* <----------------  Company overview card -------------------> */}
         <div className="col-sm-12 border_startup py-5 mt-4">
          <div className="col-sm-12 text-center">
            <p className="font-size-startup mb-1">
              <b>Company overview</b>
            </p>
            <p className="font-size-startup1">
              <b>What makes your startup special?</b>
            </p>
          </div>

          {showCompany  ? (
            <div className="col-sm-12 text-center">
              <button
                onClick={() => setShowCompany(!showCompany )}
                className="btn btn-light btn_start_style"
              >
                {" "}
                Add information <i class="fas fa-arrow-right"></i>{" "}
              </button>
            </div>
          ) : (
            <div className="col-sm-12">
              <hr className="line_summary" />
              <div className="col-sm-12 pl-0">
                <h6 className="gernal_setup mb-1 pt-2">
                  <b>Company overview</b>
                </h6>
                <h6 className="gernal_setup1 pb-2">
                  <b>
                    <i class="fas fa-exclamation-circle"></i> All fields are
                    required
                  </b>
                </h6>
              </div>
             

              <div className="col-sm-12 pl-0 pr-0">
             

              <label className="label_login gernal_setup2 m-0 pt-3">
              What is your business model and pricing?
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter the headline of your startup"
                ></textarea>


                <label className="label_login gernal_setup2 m-0 pt-3">
                What tech stack is this product or service built on?
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="React, Firebase, AWS"
                ></textarea>


                <label className="label_login gernal_setup2 m-0 pt-3">
                Who are your competitors?
                </label>
                <InputField
                  placeholder="Competitor 1"
                  name="Startup team size"
                />
                <button
                className="btn btn-light btn_start_style px-3"
              >
                {" "}
                Add Competitor
              </button><br/>

<label className="label_login gernal_setup2 m-0 pt-3 pb-2">
Growth opportunity
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter Growth opportunity"
                ></textarea>


                <div className="col-sm-12 p-0" >
                <label className="label_login gernal_setup2 m-0 pt-3">
                Growth opportunity (highlights)
                </label>
                <div className="row" >
                    <div className="col-sm-4" >
                        
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    

                    </div>
                    <div className="col-sm-4" >
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    </div>
                    <div className="col-sm-4" ></div>
                </div>
                </div>

                <div className="col-sm-12 p-0" >
                <label className="label_login gernal_setup2 m-0 pt-3">
                Key assets
                </label>
                <div className="row" >
                    <div className="col-sm-4" >
                        
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    

                    </div>
                    <div className="col-sm-4" >
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                    />
                    <label className="form-check-label label_font" htmlFor="defaultCheck1">
                        Imporve coversion rates 
                    </label>
                    </div>
                    </div>
                    <div className="col-sm-4" ></div>
                </div>
                </div>


                <label className="label_login gernal_setup2 m-0 pt-3">
                Search keywords
                </label>
                <InputField
                  placeholder="Industry, location, technology, etc"
                  name="Startup team size"
                />
                <button
                className="btn btn-light btn_start_style px-3 mb-4"
              >
                {" "}
                Add Keyword
              </button><br/>

              

               
                

               
              </div>
            
             

              <span>
                {" "}
                <button
                  onClick={() => setShowCompany(!showCompany)}
                  className="btn btn-light btn_start_style1"
                >
                  {" "}
                  Close{" "}
                </button>{" "}
              </span>
              <span>
                {" "}
                <button
                  onClick={() => setShowCompany(!showCompany)}
                  className="btn btn-light btn_start_style5 py-2"
                >
                  {" "}
                  Save <i class="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </span>
            </div>
          )}
        </div>
        {/* <----------------  Company overview card -------------------> */}
        <div className="col-sm-12 border_startup py-5 mt-4">
          <div className="col-sm-12 text-center">
            <p className="font-size-startup mb-1">
              <b>Acquisition details</b>
            </p>
            <p className="font-size-startup1">
              <b>Let buyers know your reasons for seeking an acquisition.</b>
            </p>
          </div>

          {showAcquisition   ? (
            <div className="col-sm-12 text-center">
              <button
                onClick={() => setShowAcquisition (!showAcquisition  )}
                className="btn btn-light btn_start_style"
              >
                {" "}
                Add information <i class="fas fa-arrow-right"></i>{" "}
              </button>
            </div>
          ) : (
            <div className="col-sm-12">
              <hr className="line_summary" />
              <div className="col-sm-12 pl-0">
                <h6 className="gernal_setup mb-1 pt-2">
                  <b>Acquisition details</b>
                </h6>
                <h6 className="gernal_setup1 pb-2">
                  <b>
                    <i class="fas fa-exclamation-circle"></i> All fields are
                    required
                  </b>
                </h6>
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                <label className="label_login gernal_setup2 m-0 pt-2 pb-2">
                Reason for selling
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter reasoning"
                ></textarea>
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                <label className="label_login gernal_setup2 m-0 pt-2 pb-2">
                Financing
                </label>
                <textarea
                  className="form-control custom_text"
                  placeholder="Enter Financing options"
                ></textarea>
              </div>

              <span>
                {" "}
                <button
                  onClick={() => setShowAcquisition(!showAcquisition )}
                  className="btn btn-light btn_start_style1"
                >
                  {" "}
                  Close{" "}
                </button>{" "}
              </span>
              <span>
                {" "}
                <button
                  onClick={() => setShowAcquisition(!showAcquisition )}
                  className="btn btn-light btn_start_style5 py-2"
                >
                  {" "}
                  Save <i class="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Summary;
