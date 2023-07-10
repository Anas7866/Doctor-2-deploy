import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  adviserStatus,
  deleteAdviser,
} from "../../../../Store/Adviser/actions";
import Pagination from "../Pagination/Pagination";
import "./AdvisorListing.scss"

function AdvisorListing(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const { searchAdviser, page, setPage } = props;

  const user = useSelector((state) => state.Auth?.role);
  const advisers = useSelector((state) => state.Adviser?.adviserList);

  return (
    <div className="col-sm-12 p-0">
      <div className="col-sm-12 p-0 mt-3">
        <div className="row">
          {advisers?.advisors?.map((adviser) => {
            return (
              <div className="col-sm-6 mb-4">
                <div className="col-sm-12 card_style_advisor p-4">
                  <div className="row">
                    <div className="col-sm-9 ">
                      <div className="row">
                        <div className="col-sm-4">
                          <img
                            src={adviser.imageUrl}
                            className="img-fluid img_width_advisor"
                          />
                        </div>
                        <div className="col-sm-8 pl-0 m-auto">
                          <div className="row" >
                            <div className="col-sm-6 " >
                            <div className="col-sm-12 pl-0 fontcolor_name pt-2 width_ellipse ">
                           
                           <span >
                           <b >{adviser?.name}</b>{" "}
                           </span>
                           
                         
                       </div>
                            </div>
                            <div className="col-sm-6 pl-md-0 m-auto pt-2" >
                            <badge className="badge badge-dark  background_badge py-2  px-2 rounded-pill ">
                            <span className="trophy_icon"> <i class="fas fa-trophy"></i></span>&nbsp;&nbsp;<span className="color_black_advs">{adviser.badges}</span> 
                              </badge>
                            </div>
                          </div>
                          
                          <div className="col-sm-12 pl-0 fontcolor_name width_ellipse">
                            <h6>{adviser.intro}..</h6>
                          </div>
                          <div className="col-sm-12 pl-0">
                            <p className="font_subtitle_advisor">
                              {adviser.location}
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
                            {adviser?.AdvisorExpertises.map((badge) => {
                              return <>{badge?.Expertise?.name}, </>;
                            })}
                          </h6>
                        </div>
                      </div>
                      <div className="col-sm-12 p-0 pt-4">
                        <div className="row">
                          <div className="col-sm-5">
                            <div className="col-sm-12 ">
                              <p className="font_subtitle_advisor1 mb-1">
                                Preferred deal size
                              </p>
                            </div>
                            <div className="col-sm-12 fontcolor_name1">
                              <p>{adviser.PrefferedDealSize.name}</p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="col-sm-12 ">
                              <p className="font_subtitle_advisor1 mb-1">
                                On Nami since
                              </p>
                            </div>
                            <div className="col-sm-12 fontcolor_name1">
                              <p>
                                {moment(adviser?.onNamiSince).format(
                                  "MMMM DD, YYYY"
                                )}
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="col-sm-12 ">
                              <p className="font_subtitle_advisor1 mb-1">
                                Deals closed
                              </p>
                            </div>
                            <div className="col-sm-12 fontcolor_name1">
                              <p>{adviser?.dealsClosed}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="col-sm-3 px-3 text-right text-right pt-2">
                      {user === "Admin" ? (
                        <p
                        style={{cursor:"pointer"}}
                          className="linkedin_text cursor-pointer"
                          onClick={() =>
                            history.push(`/editAdvisor/${adviser?.id}`)
                          }
                        >
                        <i class="fas fa-edit"></i>
                        </p>
                      ) : (
                        <i class="fas fa-edit"></i>
                      )}
                    </div>
                    <div className="col-sm-12">
                      <hr className="background_line" />
                    </div>
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-6">
                          <button
                            className="btn btn-light profile_advisor px-3"
                            onClick={() =>
                              history.push(`/view-profile/${adviser?.id}`)
                            }
                          >
                            View profile
                          </button>
                        </div>
                        <div className="col-sm-6 text-right">
                          <span>
                            <button
                              className="btn btn-light profile_advisor1 px-3 mr-2"
                              onClick={() =>
                                dispatch(
                                  adviserStatus({
                                    id: adviser?.id,
                                    searchAdviser: searchAdviser,
                                    page: page,
                                  })
                                )
                              }
                            >
                              {adviser?.isActive ? (
                                <i className="fas fa-ban"></i>
                              ) : (
                                <i className="fas fa-unlock"></i>
                              )}
                            </button>
                          </span>
                          <span>
                            <button
                              className="btn btn-light profile_advisor1 px-3"
                              onClick={() =>
                                dispatch(
                                  deleteAdviser({
                                    id: adviser?.id,
                                    searchAdviser: searchAdviser,
                                    page: page,
                                  })
                                )
                              }
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {advisers?.pages > 0 ? (
        <div className="col-sm-12 p-0">
          <Pagination
            page={page}
            count={advisers && advisers.pages ? advisers.pages : 0}
            setPage={setPage}
          />
        </div>
      ) : null}
    </div>
  );
}

export default AdvisorListing;
