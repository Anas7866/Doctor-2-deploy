import React from 'react'
import "./Directory.scss"
import { Link, useHistory } from "react-router-dom";
import AdvisorListing from '../AdvisorListing/AdvisorListing';

function Directory() {
  return (
    <div className='col-sm-12 p-0 mt-5'>
        <div className='col-sm-12 p-0 '>
            <h6 className='font_advisor'>4 advisors shown</h6>
        </div>
        <AdvisorListing />
       
    </div>
  )
}

export default Directory