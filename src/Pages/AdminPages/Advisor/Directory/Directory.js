import React from "react";
import "./Directory.scss";
import { Link, useHistory } from "react-router-dom";
import AdvisorListing from "../AdvisorListing/AdvisorListing";

function Directory(props) {
  const { searchAdviser, page, setPage } = props;
  return (
    <div className="col-sm-12 p-0 mt-5">
      <div className="col-sm-12 p-0 ">
        <h6 className="font_advisor">4 advisors shown</h6>
      </div>
      <AdvisorListing
        searchAdviser={searchAdviser}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default Directory;
