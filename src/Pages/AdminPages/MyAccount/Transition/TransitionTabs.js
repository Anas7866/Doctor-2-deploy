import React, { useState } from 'react'
import '../../Tickets/Ticket.scss'

function TabswitchTransition() {
  const [Tab, setTab] = useState(1)
  const tabone = () => {
    setTab(2)
  }
  const tabtwo = () => {
    setTab(1)
  }
  return (
    <>
      {Tab === 1 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2">
            <div className="col-md-6">
              <span className="active_tab">
                <b>Deposite</b>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="non_active_tab" onClick={tabone}>
                Withdraw
              </span>
            </div>
            <div className="col-md-6 text-right"></div>
          </div>

          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td className="pl-0 ">
                    <p className="mb-0 text_fot_left">Salary Deposit</p>
                  </td>
                  <td className="text-center ">
                    <p className="mb-0 text_fot_left1">17 June, Monday</p>
                  </td>
                  <td className="text-right ">
                    <p className="mb-0 text_fot_left2">PKR 45,000</p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 ">
                    <p className="mb-0 text_fot_left">Salary Deposit</p>
                  </td>
                  <td className="text-center ">
                    <p className="mb-0 text_fot_left1">17 June, Monday</p>
                  </td>
                  <td className="text-right ">
                    <p className="mb-0 text_fot_left2">PKR 45,000</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : Tab === 2 ? (
        <div className="col-md-12 px-0">
          <div className="row pt-2">
            <div className="col-md-6">
              <span onClick={tabtwo} className="non_active_tab">
                Deposite
              </span>
              &nbsp;&nbsp;&nbsp;
              <span className="active_tab">
                <b>Withdraw</b>
              </span>
            </div>
            <div className="col-md-6 text-right"></div>
          </div>
          {/* <hr className="my-2" /> */}
          <div className="col-md-12 mt-2 px-0 height_fix_list">
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td className="pl-0 ">
                    <p className="mb-0 text_fot_left">Salary Deposit</p>
                  </td>
                  <td className="text-center ">
                    <p className="mb-0 text_fot_left1">17 June, Monday</p>
                  </td>
                  <td className="text-right ">
                    <p className="mb-0 text_fot_left2">PKR 45,000</p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 ">
                    <p className="mb-0 text_fot_left">Salary Deposit</p>
                  </td>
                  <td className="text-center ">
                    <p className="mb-0 text_fot_left1">17 June, Monday</p>
                  </td>
                  <td className="text-right ">
                    <p className="mb-0 text_fot_left2">PKR 45,000</p>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 ">
                    <p className="mb-0 text_fot_left">Salary Deposit</p>
                  </td>
                  <td className="text-center ">
                    <p className="mb-0 text_fot_left1">17 June, Monday</p>
                  </td>
                  <td className="text-right ">
                    <p className="mb-0 text_fot_left2">PKR 45,000</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default TabswitchTransition
