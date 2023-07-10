import React from "react";
import "./Filters.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleAdviserSuccess } from "../../../../Store/Adviser/actions";

function Filters(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setSearchAdviser } = props;
  return (
    <div className="col-sm-12 filters_margin">
      <div className="row">
        <div className="col-sm-7 ">
          <div className="row">
            <span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary button_sort_style py-2 px-5"
                  type="button"
                  onClick={() => {
                    history.push("/addAdvisor");
                    dispatch(
                      getSingleAdviserSuccess({
                        email: "",
                        name: "",
                        badges: "",
                        intro: "",
                        location: "",
                        responseRate: "",
                        responseTime: "",
                        dealsAquired: "",
                        preferedDealSize: "",
                        onNamiSince: "",
                        dealsClosed: "",
                        expertise: [],
                        shortBio: "",
                        linkedIn: "",
                        website: "",
                        otherExperience: "",
                        imageUrl: "",
                      })
                    );
                  }}
                >
                  Add Advisors
                </button>
              </div>
            </span>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-3 pl-0 padding_top_advisor pr-0">
          <div className="col-sm-12 pl-0">
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
                onChange={(e) => setSearchAdviser(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
