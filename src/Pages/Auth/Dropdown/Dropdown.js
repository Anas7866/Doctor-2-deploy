import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdown } from "../../../Store/Auth/actions";
import { Link, useHistory } from "react-router-dom";
import Headerauth from "../Headerauth/Headerauth";
import ".././Login/Login.scss";

function Dropdown() {
  const dispatch = useDispatch();
  let history = useHistory();
  const questionroute = (id) => {
    history.push(`/QA/${id}`);
  };
  const questionsArray = useSelector((state) => state.Auth?.questions);
  useEffect(() => {
    dispatch(dropdown());
  }, []);
  console.log("questionsArray", questionsArray);
  return (
    <>
      {questionsArray ? (
        <>
          <div className="col-md-12 background_color_login_signup">
            <div className="col-sm-12">
              <Headerauth />
            </div>
            <div className="col-md-12 px-5">
              <div className="col-md-12 custom_deopdown_padding">
                <div className="row">
                  {questionsArray.map((qust, index) => {
                    return (
                      <div className="col-md-2 mt-5 text-center">
                        <Link
                          to={`/QA/${qust.id}`}
                          class="dropdown-item"
                          href="#"
                        >
                          <div className="col-md-12">
                            <img className="img-fluid" src={qust.image} />
                          </div>
                          <h6 className="text_all_catagories">{qust.title}</h6>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default Dropdown;
