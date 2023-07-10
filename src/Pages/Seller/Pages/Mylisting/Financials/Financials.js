import React from 'react'
import { useState } from 'react';
import InputField from '../../../../../Shared/InputField';
import "./Financials.scss"

function Financials() {
    const [showAcquisition  , setShowAcquisition  ] = useState(true);

  return (
    <div className='col-sm-12 background_financials pt-5 pb-5 '>
       <h6><b> Financials </b></h6>
       <p className='financials_font'>Your past and projected financial performance.</p>

       <div className='col-sm-12 p-5 text-center border_finan' >
       <h6><b> Connect financial metrics to get started </b></h6>
       <p className='financials_font'>
       We’ll build a P&L and financial snapshot for you that will help increase trust with buyers and <br/> helps answer initial questions to save you time
       </p>
      
       {showAcquisition   ? (
            <div className="col-sm-12 text-center">
              <button  onClick={() => setShowAcquisition (!showAcquisition  )} className='btn btn-light background_button_final px-3 py-2'>Enter manually</button>
            </div>
          ) : (
            <div className="col-sm-12 text-left">
              <hr className="line_summary" />
            
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                
                <label className="label_login gernal_setup2 m-0 pt-3">
                TTM gross revenue
                </label>
                <InputField
                  placeholder="$ 120,000"
                  name="Startup team size"
                />
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                
                <label className="label_login gernal_setup2 m-0 pt-3">
                TTM net profit
                </label>
                <InputField
                  placeholder="$ 12,000"
                  name="Startup team size"
                />
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                
                <label className="label_login gernal_setup2 m-0 pt-3">
                Last months gross revenue
                </label>
                <InputField
                  placeholder="$ 10,000"
                  name="Startup team size"
                />
              </div>
              <div className="col-sm-12 pl-0 pr-0 mb-4">
                
                <label className="label_login gernal_setup2 m-0 pt-3">
                Last months net profit
                </label>
                <InputField
                  placeholder="$ 1000"
                  name="Startup team size"
                />
              </div>

              <span>
                {" "}
                <button
                  onClick={() => setShowAcquisition(!showAcquisition )}
                  className="btn btn-light btn_start_style1"
                >
                  {" "}
                  Close{" "}
                </button>{" "}
              </span>
              <span>
                {" "}
                <button
                  onClick={() => setShowAcquisition(!showAcquisition )}
                  className="btn btn-light btn_start_style5 py-2"
                >
                  {" "}
                  Save <i class="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </span>
            </div>
          )}
       </div>
        </div>
  )
}

export default Financials