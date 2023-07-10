import React from 'react'
import "./PrivateInfo.scss"
import CustomizedSwitches from './Switch/Switch.tsx'

function PrivateInfo() {
  return (
    <div className='col-sm-12 py-4 private_background'>
         <h5><b>Private information</b></h5>
         <p className='para_summary'><b>Buyers will see this after you grant them access to your startup.</b></p>
         <div className='col-sm-12 border_switch pt-2'>
          <div className='row'>
            <div className='col-sm-10 pt-1'>
              <p className='font_para_info mb-0'><b>Auto-approve startup access</b></p>
            </div>
            <div className='col-sm-2  text-right'>
              <CustomizedSwitches />
            </div>
          </div>
         </div>
         <div className='col-sm-12 p-0 pt-2 pb-2'>
            <hr className='dashed_border'/>
          </div>
          <div className='col-sm-12 pl-0 pr-0'>
            <p className='font_seller_details'><b>Seller details</b></p>
            <div className='col-sm-12 p-5 background_about_your text-center'>
            <p className='font_seller_details mb-1'><b>Tell us about yourself</b></p>
            <p className='font_seller_details1'><b>Enter a few personal details to help buyers get to <br/> know you better.</b></p>
            <button className='btn btn-light font_profile_arrow'>Create profile <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-sm-12 pl-0 pr-0 mt-4'>
            <div className='row'>
            <div className='col-sm-6'>
            <p className='font_seller_details'><b>Startup details</b></p>
            </div>
            <div className='col-sm-6 text-right'>
            <p className='font_seller_details4 '><b><u>Edit info</u></b></p>
            </div>
            <div className='col-sm-12 '>
              <p className='mb-0 startup_text'><b>Startup</b></p>
              <a herf="LLC" className=' startup_text1'><b>LLC <span className='link_icom' > <i class="fas fa-external-link-alt"></i></span></b></a>
            </div>
            </div>
           
          </div>
          <div className='col-sm-12 p-0 pt-2 pb-2'>
            <hr className='dashed_border'/>
          </div>
          <div className='col-sm-12 pl-0 pr-0'>
            <p className='font_seller_details mb-0'><b>P&L statement</b></p>
            <p className='startup_text'><b>Upload your profit and loss statement for potential buyers</b></p>
            <div class="upload-btn-wrapper mt-3">
            <button class="btnn"><i class="fas fa-plus"></i> Upload P&L</button>
            <input type="file" name="myfile" />
          </div>
          
          </div>
          <div className='col-sm-12 pl-0 pr-0 mt-4'>
            <p className='font_seller_details mb-0'><b>Documents and files</b></p>
            <p className='startup_text'><b>Upload your pitch deck and any financial documents for potential buyers</b></p>
            <div class="upload-btn-wrapper mt-3">
            <button class="btnn"><i class="fas fa-plus"></i> Add file</button>
            <input type="file" name="myfile" />
          </div>
          </div>
    </div>
  )
}

export default PrivateInfo