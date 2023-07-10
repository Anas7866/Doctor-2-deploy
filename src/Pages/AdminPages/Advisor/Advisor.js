import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAdviserList } from "../../../Store/Adviser/actions";
import NavScrollExample from "../HeaderAdmin/HeaderAdmin";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import TabswitchAdvisor from "./TabswitchAdvisor/TabswitchAdvisor.js";

function Advisor() {
  const dispatch = useDispatch();

  const [searchAdviser, setSearchAdviser] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAdviserList({ searchAdviser: searchAdviser, page: page }));
  }, [searchAdviser, page]);

  return (
    <div className="col-sm-12 pl-0 pr-0">
      <NavScrollExample />
      <TabswitchAdvisor
        setSearchAdviser={setSearchAdviser}
        searchAdviser={searchAdviser}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default Advisor;
