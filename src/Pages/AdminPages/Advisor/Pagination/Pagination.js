import React from "react";
import Pagination from "@mui/material/Pagination";
// import "./Pagination.scss";

function PaginationComponent(props) {
  const { count, page } = props;
  const handleChange = (event, value) => {
    props.setPage(value);
  };
  return (
    <Pagination
      page={page}
      className="mb-5"
      count={count}
      onChange={handleChange}
    />
  );
}

export default PaginationComponent;
