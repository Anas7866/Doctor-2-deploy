import React from 'react'
import InputField from '../../../../Shared/InputField'
import SelectField from '../../../../Shared/SelectField/SelectField'
import FooterSellerAdmin from '../FooterSellerAdmin/FooterSellerAdmin'
import HeaderAdminSeller from '../HeaderAdminSeller/HeaderAdmin'
import "./Createprofile.scss"
import {useHistory } from "react-router-dom";

function Createprofile() {
    let history = useHistory();
  return (
    <div className='col-sm-12 p-0 background-create-profile'>
            <HeaderAdminSeller />
            <div className='container-fluid py-5 px-5'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='col-sm-12 p-0 '>
                                <span><button
                                 onClick={() =>
                                    history.push(`/listing`)
                                  }
                                className='btn btn-light btn-lg rounded-circle btn-style-create'> <i class="fas fa-arrow-left"></i> </button></span>
                                <span><button className='btn btn-light btn-lg rounded-circle btn-font-style' disabled> back </button></span>
                            </div>
                            <div className='col-sm-12 background_card_create  p-4 mt-5 mb-5'>
                            <div className='col-sm-12  '>
                               <h5><b>Your profile</b></h5>
                               </div>
                               <div className='col-sm-12  '>
                              <div className='row pt-4 mb-5'>
                                <div className='col-sm-3'>
                                    <img src='../images/profile.jpeg' className='img-fluid img_radius_check' />
                                </div>
                                <div className='col-sm-9 m-auto'>
                                <div class="upload-btn-wrapper mt-3">
                                    <button class="btnn">Upload Photo</button>
                                    <input type="file" name="myfile" />
                                </div>
                                </div>
                              </div>
                              <div className='col-sm-12 p-0'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <label className='label_size'>First name</label>
                                        <InputField
                                        placeholder="Enter first name"
                                        name="first name"
                                        />
                                    </div>
                                    <div className='col-sm-6'>
                                    <label className='label_size'>Last name</label>
                                        <InputField
                                        placeholder="Enter last name"
                                        name="last name"
                                        />
                                    </div>
                                </div>
                                <div className='col-sm-12 p-0'>
                                <label className='label_size'>Role</label>
                                <SelectField
                                    isMulti
                                    placeholder="Select"
                                    name="expertise"
                                    //   options={adviserDropdownValues?.expertiseList}
                                    />
                                </div>
                                <div className='col-sm-12 p-0 pb-3'>
                                <label className='label_size'>About yourself</label>
                                <textarea className='form-control textarea-create' placeholder='A short bio describing your background and interest.'></textarea>
                                </div>
                                <div className='col-sm-12 p-0'>
                                <label className='label_size'>LinkedIn profile link (optional)</label>
                                <InputField
                                        placeholder="Enter LinkedIn URL"
                                        name="url"
                                        />
                                </div>
                                <div className='col-sm-12 p-0 mt-4'>
                                    <span><button
                                    onClick={() =>
                                        history.push(`/listing`)
                                      }
                                    className='btn btn-light btn-lg button_cancel_create'>Cancel</button></span>
                                    <span><button className='btn btn-light btn-lg button_cancel_create1 ml-3'>Save</button></span>
                                </div>
                              </div>
                               </div>
                            </div>

                        </div>
                        <div className='col-sm-6 text-center'>
                            <img src='../images/createprofile.gif' className='img-fluid' />
                        </div>
                    </div>
            </div>
            <FooterSellerAdmin/>
    </div>
  )
}

export default Createprofile