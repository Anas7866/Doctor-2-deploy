import React from 'react'
import './Headerauth.scss'
import { useHistory, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Headerauth() {
  let history = useHistory()
  return (
    <div className="col-md-12 padding_mobile background_login ">
      {/* // <div
    // onClick={() =>
    //   history.push(`/`)
    // }
    // className='col-sm-12 px-md-5 px-3 pt-4 pb-4 border_bottom_header fixed-top'>
    //     <img src='../images/logo.png' className='img-fluid img_width' />
    //     </div> */}
      <div className="col-md-12 background_color_header_public11 py-4 navigation_for_laptop">
        <div className="col-md-12 custome_main_setting_for_every_page ">
          <div className="row">
            <div className="col-md-1">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img className="img-fluid logo_width" src="../images/logo.png" />
              </Link>
            </div>
            <div className="col-md-6 text-center m-auto">
              <div className="row">
                <div className="col-md-3">
                <Link to="/" style={{ textDecoration: "none", color:"black" }}>
                  <p className="mb-0 font_header">Home</p>
                  </Link>
                </div>
                <div className="col-md-3">
                <Link to="/" style={{ textDecoration: "none", color:"black" }}>
                  <p className="mb-0 font_header">How it work</p>
                  </Link>
                </div>
                <div className="col-md-3">
                <Link to="/" style={{ textDecoration: "none", color:"black" }}>
                  <p className="mb-0 font_header">About Us</p>
                  </Link>
                </div>
                <div className="col-md-3">
                <Link to="/getintouch" style={{ textDecoration: "none", color:"black" }}>
                  <p className="mb-0 font_header">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 m-auto text-right">
              <img className="img-fluid" src="../images/avatar.png" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Navigation  */}
      <div className="col-md-12 px-0  navigation_for_mobile">
        <div className="row">
          <div className="col-md-6 px-0 col-6">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              className="img-fluid logo_width_for_mobile"
              src="../images/logo.png"
            />
            </Link>
          </div>
          <div className="col-md-6 px-0 col-6 text-right">
            <button className="btn btn-light">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headerauth
