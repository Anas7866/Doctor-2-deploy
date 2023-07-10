import React from "react";
import "./Filters.scss";

function Filters() {
  return (
    <div className="col-sm-12 filters_margin">
      <div className="row">
        <div className="col-sm-7 ">
          <div className="row">
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle button_sort_style py-2 px-3"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort: Relevence
                </button>
                <div
                  className="dropdown-menu dropdown-lg mt-2 drodown_shadow"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle button_sort_style py-2 px-3 mx-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Expertise
                </button>
                <div
                  className="dropdown-menu dropdown-lg mt-2 drodown_shadow"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle button_sort_style py-2 px-3 mx-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Deals Closed
                </button>
                <div
                  className="dropdown-menu dropdown-lg mt-2 drodown_shadow"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle button_sort_style py-2 px-3 mx-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Favourites
                </button>
                <div
                  className="dropdown-menu dropdown-lg mt-2 drodown_shadow"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle button_sort_style py-2 px-3 mx-1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  More Filters
                </button>
                <div
                  className="dropdown-menu dropdown-lg mt-2 drodown_shadow"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary">
                          {" "}
                          Layout button{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-3 pr-0">
          <div className="col-sm-12">
            <div className="input-group">
              <div className="input-group-prepend ">
                <button className="btn btn-light button_search " type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <input
                type="text"
                className="form-control input_search"
                placeholder="Search"
                aria-label=""
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
