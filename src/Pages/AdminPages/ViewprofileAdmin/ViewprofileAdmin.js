import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAdviserProfileInfo } from "../../../Store/Adviser/actions";
import Button from "../../../Shared/Button/Button";
import "./ViewprofileAdmin.scss";

function ViewprofileAdmin() {
  const user = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const adviser = useSelector((state) => state.Adviser?.adviserProfile);
  useEffect(() => {
    dispatch(getAdviserProfileInfo(user.id));
  }, []);

  return (
    <div className="col-sm-12 p-0">
      <HeaderAdmin />
      <div className="col-sm-12">
        <div className="row p-5">
          <div className="col-sm-6">
            <span>
              <button
                className="btn btn-light btn-lg rounded-circle btn_profile_advisor"
                onClick={() => history.push("/advisorListing")}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
            </span>
            <span>
              <button className="button_back pl-4">Back</button>
            </span>
          </div>
          <div className="col-sm-6 text-right">
            <span>
              <button className="button_fav pl-4">
                <i className="fas fa-heart"></i> Add to favourites
              </button>
            </span>
            <span>
              <button className="button_adv pl-4">
                <i className="fas fa-print"></i> Archive this advisor
              </button>
            </span>
          </div>
        </div>
        <div className="row px-4">
          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-3 text-right">
                <img
                  src={adviser?.imageUrl}
                  className="img-fluid img_width_advisor_profile"
                />
              </div>
              <div className="col-sm-7 pl-0 m-auto">
                <div className="col-sm-12 fontcolor_name pt-2">
                  {/* <h6>
                    <b>{adviser?.name}</b>{" "}
                    <badge className="badge badge-light background_badge px-2 rounded-pill">
                      <span className="trofee">
                        <i className="fas fa-trophy"></i>{" "}
                      </span>
                      {adviser?.badge}
                    </badge>
                  </h6> */}
                  <div className="row" >
                            <div className="col-sm-6 " >
                            <div className="col-sm-12 pl-0 fontcolor_name pt-2 width_ellipse ">
                           
                           <span >
                           <b >{adviser?.name}</b>{" "}
                           </span>
                           
                         
                       </div>
                            </div>
                            <div className="col-sm-6 pl-md-0 m-auto" >
                            <badge className="badge badge-dark background_badge px-2 rounded-pill ">
                            <span className="trophy_icon"> <i class="fas fa-trophy"></i></span>&nbsp;&nbsp;<span>{adviser?.badges}</span> 
                              </badge>
                            </div>
                          </div>
                          
                </div>
                <div className="col-sm-12 fontcolor_name">
                  <h6 className="h6_advisor_profile">{adviser?.intro}</h6>
                </div>
                <div className="col-sm-12 ">
                  <p className="font_subtitle_advisor_profile">
                    <i className="fas fa-map-marker"></i> {adviser?.location}
                  </p>
                </div>
              </div>
              <div className="col-sm-2 m-auto">
                <button className="btn btn-light btn_link_style "  data-toggle="tooltip" data-placement="top" title="Copy link to clipboard">
                  <i className="fas fa-link"></i>
                </button>
              </div>
            </div>
            <div className="col-sm-12 px-4 py-4">
              <div className="col-sm-12 p-4 bacground_rating_profile ">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Response rate{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {" "}
                      <span className="subheading_rating_card">
                        {" "}
                        <i className="fab fa-gg-circle"></i>
                      </span>{" "}
                      {adviser?.responseRate}
                    </p>
                  </div>
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Response time{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {" "}
                      <span className="subheading_rating_card">
                        {" "}
                        <i className="fas fa-clock"></i>{" "}
                      </span>{" "}
                      {adviser?.responseTime}
                    </p>
                  </div>
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Deals MicroAcquire'd{" "}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {" "}
                      <span className="subheading_rating_card">
                        {" "}
                        <i className="fas fa-record-vinyl"></i>
                      </span>{" "}
                      {adviser?.dealsAquired}
                    </p>
                  </div>
                  <div className="col-sm-3"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 px-4">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-2 heading_rating_card">
                    Preferred deal size{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {" "}
                    <span className="subheading_rating_card">
                      {" "}
                      <i className="fas fa-wallet"></i>
                    </span>{" "}
                    <b>{adviser?.PrefferedDealSize?.label}</b>
                  </p>
                </div>
                <div className="col-sm-3">
                  <p className="mb-2 heading_rating_card">
                    On MicroAcquire since{" "}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {" "}
                    <span className="subheading_rating_card">
                      {" "}
                      <i className="fas fa-calendar-week"></i>{" "}
                    </span>{" "}
                    {moment(adviser?.onNamiSince).format("MMMM DD, YYYY")}
                  </p>
                </div>
                <div className="col-sm-3">
                  <p className="mb-2 heading_rating_card">
                    Deals closed <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {" "}
                    <span className="subheading_rating_card">
                      {" "}
                      <i className="fas fa-comment-dollar"></i>
                    </span>{" "}
                    {adviser?.dealsClosed}
                  </p>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </div>
            <div className="col-sm-12 px-4 pt-4">
              <p className="mb-2 heading_rating_card">Expertise </p>
              {adviser?.AdvisorExpertises?.map((badge) => {
                return (
                  <p className="mb-1 heading_rating_card2">
                    <span className="heading_rating_card3">
                      <i className="far fa-circle" />
                    </span>{" "}
                    {badge?.Expertise?.label}
                  </p>
                );
              })}
            </div>
            <div className="col-sm-12 px-4 pt-4">
              <p className="mb-2 heading_rating_card">Short bio </p>
              <p className="short_bio">{adviser?.shortBio}</p>
            </div>
            <div className="col-sm-12 px-4">
              <p className="mb-2 heading_rating_card">LinkedIn</p>
              <a href={adviser?.linkedIn} target="_blank" className="subheading_rating_card5">
                <b>{adviser?.linkedIn}</b>
              </a>
            </div>
            <div className="col-sm-12 px-4">
              <p className="mb-2 heading_rating_card">Website</p>
              <a href={adviser?.website} target="_black" her className="subheading_rating_card5">
                <b>{adviser?.website}</b>
              </a>
            </div>
          </div>
          <div className="col-sm-5">
            {/* <div className="col-sm-12 background_profile p-4">
              <div className="col-sm-12">
                <button className="btn btn-success rounded-circle py-2 btn_send_profile">
                  {" "}
                  <i className="fas fa-paper-plane"></i>{" "}
                </button>
              </div>
              <div className="col-sm-12 py-3">
                <h6 className="m-0 title_profile_card">
                  <b>Let’s work together</b>
                </h6>
                <p className="pt-2 subtitle_profile_card">
                  Tell me briefly about your startup, acquisition goals, and
                  budget
                </p>
              </div>
              <div className="col-sm-12 ">
                <label className="label_profile">Message</label>
                <textarea className="form-control text_field"></textarea>
                <button className="btn btn-primary btn_style_contact">
                  Contact{" "}
                  <span className="arrow_profile">
                    {" "}
                    <i className="fas fa-arrow-right"></i>{" "}
                  </span>
                </button>
              </div>
            </div> */}
            <div className="col-sm-12 text-center">
              <img src="../images/profile.gif" className="img-fluid gif_style_admin" />
            </div>
          </div>
        </div>
        <div className="col-sm-12 px-5 py-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}



        

export default ViewprofileAdmin;
