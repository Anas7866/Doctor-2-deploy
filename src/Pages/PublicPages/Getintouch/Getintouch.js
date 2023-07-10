import React from 'react'
import './Getintouch.scss'
import Navgetintouch from './Navgetintouch/Navgetintouch'

function Getintouch() {
  return (
    <div className="col-sm-12 p-0 background_main11">
      <Navgetintouch />
      <div className="col-md-12 px-md-5 padding_set_custome">
        <div className="col-md-12 px-md-4 pb-5">
          <div className="col-md-12">
            <div className="row padding_top_getintouch">
              <div className="col-md-6 m-auto">
                <h2>
                  <b>Let’s Get In Touch</b>
                </h2>
                <img
                  className="img-fluid line_width"
                  src="../images/line.png"
                />
                <h5 className="pt-4 color_para">
                  We are looking forward to hearing from you. If you have any
                  questions, comments or suggestions, send in your details, and
                  our careers advisor will contact you immediately.
                </h5>
              </div>
              <div className="col-md-6 text-center">
                <img className="img-fluid" src="../images/banner1.png" />
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <div className="col-md-12 background_white_color bg-white p-4">
              <div className="text-center pb-5 pt-4">
                <h3>
                  <b>Contact Us</b>
                </h3>
                <h5>
                  Feel Free to contact us any time. We will get back to you as
                  soon as we can!{' '}
                </h5>
              </div>
              <div className="col-md-12 text-center">
                <input
                  className="form-control form-control-lg input_area_one"
                  placeholder="Type Your Name"
                />
                <textarea
                  className="form-control mt-4 form-control-lg input_area_one"
                  placeholder="Enter Your Massage"
                  rows={5}
                ></textarea>
              </div>
              <div className="col-md-12 pt-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    <b>I'm not a robot</b>
                  </label>
                </div>
                <div className="col-md-12 text-center mt-3 pb-5">
                  <button className="btn btn-primary btn-lg background_button_getin">
                    {' '}
                    Send Message{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getintouch
