import React from 'react'
import './MyAccount.scss'
import Chart from './Charts/Charts'
import Transition from './Transition/Transition'

function MyAccount() {
  return (
    <div className="col-md-12 mt-4 px-4">
      <div className="row">
        <div className="col-md-3">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
            <img className="img-fluid" src="../images/wallet.png" />
            <p className="mb-0 text_style_balance pt-2">Active Balance</p>
            <p className="mb-0 text_style_balance10 pt-2 ">
              <b>
                USD 2046000
              </b>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
            <img className="img-fluid" src="../images/coins.png" />
            <p className="mb-0 text_style_balance pt-2">Total Balance</p>
            <p className="mb-0 text_style_balance10 pt-2 ">
              <b>
              USD 846000
              </b>
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-md-12 bg-white  py-2 border_radius_div_auto">
            <div className="row">
              <div className="col-md-3 m-auto">
                <img className="img-fluid" src="../images/calendar.png" />
              </div>
              <div className="col-md-9">
                <p className="mb-0 text_style_balance ">Completed Sessions</p>
                <p className="mb-0 text_style_balance10 ">
              <b>
              USD 54000
              </b>
            </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 bg-white  py-2 mt-4 border_radius_div_auto">
            <div className="row">
              <div className="col-md-3 m-auto">
                <img className="img-fluid" src="../images/notes.png" />
              </div>
              <div className="col-md-9">
                <p className="mb-0 text_style_balance ">Pending Sessions</p>
                <p className="mb-0 text_style_balance10 ">
              <b>
              USD 46000
              </b>
            </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col-md-12 bg-white text-center py-3 border_radius_div">
            <Chart />
          </div>
        </div>
      </div>
      <div className="col-md-12 bg_second_section">
        <Transition />
      </div>
    </div>
  )
}

export default MyAccount
