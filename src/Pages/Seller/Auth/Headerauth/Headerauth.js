import React from 'react'
import "./Headerauth.scss"
import {useHistory } from "react-router-dom";

function Headerauth() {
  let history = useHistory();
  return (
    <div
    onClick={() =>
      history.push(`/`)
    }
    className='col-sm-12 px-md-5 px-3 pt-4 pb-4 border_bottom_header fixed-top'>
        <img src='../images/logo.png' className='img-fluid img_width' />
        </div>
  )
}

export default Headerauth