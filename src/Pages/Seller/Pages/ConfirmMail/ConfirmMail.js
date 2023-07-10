import React from 'react'
import HeaderSeller from '../HeaderSeller/HeaderSeller'
import FooterSeller from "../FooterSeller/FooterSeller"
import "./ConfirmMail.scss"
import {useHistory } from "react-router-dom";

function ConfirmMail() {
  let history = useHistory();
  return (
    <div className='col-sm-12 p-0 height_page'>
      <HeaderSeller />
      <div className='col-sm-12 text-center paddingCEnter'>
          <button className='btn btn-primary btn-lg rounded-pill' ><b>A</b></button>
          <h3 className='pt-3'><b>Verify To confirm your Account ✉️</b></h3>
          <p className='styletext mb-1'><b>We sent a verification link to the email address you used to sign up.</b></p>
          <p className='styletext mb-1'><b>Please click that link to confirm your account. If you can't see the email, please check your</b></p>
          <p className='styletext mb-1'><b>spam or junk folder.</b></p>
          <p className='styletext pt-1'><b>Didn't receive the email?<span className='resend_color'  onClick={() =>
      history.push(`/startup`)
    }> Resend Email</span></b></p>
      </div>
      <FooterSeller />
      </div>
  )
}

export default ConfirmMail