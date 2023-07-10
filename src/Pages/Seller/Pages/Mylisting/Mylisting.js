import React from 'react'
import FooterSellerAdmin from '../FooterSellerAdmin/FooterSellerAdmin'
import HeaderAdminSeller from '../HeaderAdminSeller/HeaderAdmin'
import CrousalProgress from './CrousalProgress/CrousalProgress'
import Financials from './Financials/Financials'
import "./listing.scss"
import OpportunityCrousal from './OpportunityCrousal/OpportunityCrousal'
import PrivateInfo from './PrivateInfo/PrivateInfo'
import Summary from './Summary/Summary'

function Mylisting() {
  return (
    <div className='col-sm-12 p-0 background-listing'>
        <HeaderAdminSeller />
        <div className='container-fluid py-5 px-5'>
            <div className='col-sm-12'>
            <div className='row'>
              <div className='col-sm-6'>
                  <CrousalProgress/>
              </div>
              <div className='col-sm-6'>
                  <OpportunityCrousal />
              </div>
            </div>
            <div className='row py-5'>
              <div className='col-sm-8'>
                <Summary />
              </div>
              <div className='col-sm-4'>
                <PrivateInfo />
              </div>
            </div>
            <div className='col-sm-12 p-0'>
              <Financials />
            </div>
        </div>
        </div>
        <FooterSellerAdmin/>
        </div>
  )
}

export default Mylisting