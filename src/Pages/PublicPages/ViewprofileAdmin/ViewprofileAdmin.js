import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ViewprofileAdmin.scss'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import Button from '../../../Shared/Button/Button'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAdviserProfileInfo } from '../../../Store/Adviser/actions'

function ViewprofileAdmin() {
  const user = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAdviserProfileInfo(user.id))
  }, [])
  return (
    <div className="col-sm-12 p-0">
      <HeaderAdmin />
      <div className="col-sm-12">
        <div className="row p-5">
          <div className="col-sm-6">
            <span>
              {' '}
              <Link to="/advisor">
                {' '}
                <button className="btn btn-light btn-lg rounded-circle btn_profile_advisor">
                  <i className="fas fa-arrow-left"></i>
                </button>{' '}
              </Link>
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
                  src="https://firebasestorage.googleapis.com/v0/b/microacquire.appspot.com/o/users%2F1UXJE3m1FMN8kYX2eB67EyMWct43%2Favatar?alt=media&token=651b7a91-e9e9-46c0-857c-b6725b7563a3"
                  className="img-fluid rounded-circle img_width_advisor_profile"
                />
              </div>
              <div className="col-sm-7 pl-0 m-auto">
                <div className="col-sm-12 fontcolor_name pt-2">
                  <h6>
                    <b>Nick Santillo</b>{' '}
                    <badge className="badge badge-light background_badge px-2 rounded-pill">
                      <span className="trofee">
                        {' '}
                        <i className="fas fa-trophy"></i>
                      </span>
                      &nbsp;&nbsp;Top Closer
                    </badge>
                  </h6>
                </div>
                <div className="col-sm-12 fontcolor_name">
                  <h6 className="h6_advisor_profile">
                    Experienced CFO and Acquisition Advisor - I help find a
                    buyer and sell your business.
                  </h6>
                </div>
                <div className="col-sm-12 ">
                  <p className="font_subtitle_advisor_profile">
                    <i className="fas fa-map-marker"></i> Vancouver, BC, Canada
                  </p>
                </div>
              </div>
              <div className="col-sm-2 m-auto">
                <button className="btn btn-light btn_link_style ">
                  <i className="fas fa-link"></i>
                </button>
              </div>
            </div>
            <div className="col-sm-12 px-4 py-4">
              <div className="col-sm-12 p-4 bacground_rating_profile ">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Response rate{' '}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {' '}
                      <span className="subheading_rating_card">
                        {' '}
                        <i className="fab fa-gg-circle"></i>
                      </span>{' '}
                      21 %
                    </p>
                  </div>
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Response time{' '}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {' '}
                      <span className="subheading_rating_card">
                        {' '}
                        <i className="fas fa-clock"></i>{' '}
                      </span>{' '}
                      few days
                    </p>
                  </div>
                  <div className="col-sm-3">
                    <p className="mb-2 heading_rating_card">
                      Deals MicroAcquire'd{' '}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                    <p className="subheading_rating_card1">
                      {' '}
                      <span className="subheading_rating_card">
                        {' '}
                        <i className="fas fa-record-vinyl"></i>
                      </span>{' '}
                      2
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
                    Preferred deal size{' '}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {' '}
                    <span className="subheading_rating_card">
                      {' '}
                      <i className="fas fa-wallet"></i>
                    </span>{' '}
                    <b>$100K - $5M </b>
                  </p>
                </div>
                <div className="col-sm-3">
                  <p className="mb-2 heading_rating_card">
                    On MicroAcquire since{' '}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {' '}
                    <span className="subheading_rating_card">
                      {' '}
                      <i className="fas fa-calendar-week"></i>{' '}
                    </span>{' '}
                    September 2021
                  </p>
                </div>
                <div className="col-sm-3">
                  <p className="mb-2 heading_rating_card">
                    Deals closed <i className="fas fa-exclamation-circle"></i>
                  </p>
                  <p className="subheading_rating_card1">
                    {' '}
                    <span className="subheading_rating_card">
                      {' '}
                      <i className="fas fa-comment-dollar"></i>
                    </span>{' '}
                    2
                  </p>
                </div>
                <div className="col-sm-3"></div>
              </div>
            </div>
            <div className="col-sm-12 px-4 pt-4">
              <p className="mb-2 heading_rating_card">Expertise </p>
              <p className="mb-1 heading_rating_card2">
                {' '}
                <span className="heading_rating_card3">
                  {' '}
                  <i className="far fa-circle"></i>
                </span>{' '}
                Due Diligence{' '}
              </p>
              <p className="mb-1 heading_rating_card2">
                {' '}
                <span className="heading_rating_card3">
                  {' '}
                  <i className="far fa-circle"></i>
                </span>{' '}
                M&A{' '}
              </p>
              <p className="mb-1 heading_rating_card2">
                {' '}
                <span className="heading_rating_card3">
                  {' '}
                  <i className="far fa-circle"></i>
                </span>{' '}
                Negotiations{' '}
              </p>
              <p className="mb-1 heading_rating_card2">
                {' '}
                <span className="heading_rating_card3">
                  {' '}
                  <i className="far fa-circle"></i>
                </span>{' '}
                Valuation{' '}
              </p>
            </div>
            <div className="col-sm-12 px-4 pt-4">
              <p className="mb-2 heading_rating_card">Short bio </p>
              <p className="short_bio">
                Experienced CFO and Acquisition Advisor helping clients sell
                their companies for $500k - $10M.{' '}
              </p>
              <p className="short_bio">
                I offer CFO consulting services, including M&A Advisory, to high
                growth businesses. Clients choose to work with me for
                reliability, easy communication, high frustration tolerance,
                strategic vision, and flexibility.
              </p>
              <p className="mb-1 short_bio">
                I can advise you through the entire sales process:{' '}
              </p>
              <p className="mb-1 short_bio">-Prep for sale </p>
              <p className="mb-1 short_bio">-Developing a pricing strategy </p>
              <p className="short_bio">Schedule a call to learn more: </p>
              <p className="short_bio">
                https://calendly.com/nicksantillo/nicksantilloadvisordiscoverycall
              </p>
            </div>
            <div className="col-sm-12 px-4">
              <p className="mb-2 heading_rating_card">LinkedIn</p>
              <p className="subheading_rating_card5">
                {' '}
                <b>https://www.linkedin.com/in/santillonic</b>
              </p>
            </div>
            <div className="col-sm-12 px-4">
              <p className="mb-2 heading_rating_card">Website</p>
              <p className="subheading_rating_card5">
                {' '}
                <b>www.anny.biz</b>
              </p>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="col-sm-12 background_profile p-4">
              <div className="col-sm-12">
                <button className="btn btn-success rounded-circle py-2 btn_send_profile">
                  {' '}
                  <i className="fas fa-paper-plane"></i>{' '}
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
                  Contact{' '}
                  <span className="arrow_profile">
                    {' '}
                    <i className="fas fa-arrow-right"></i>{' '}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 px-5 py-3">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ViewprofileAdmin
