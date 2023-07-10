import React from 'react'
import './Ticket.scss'
import Tabswitch from './Tabswitch/Tabswitch'

function Tickets() {
  return (
    <div className="col-md-12 mt-3 ">
      <div className="col-md-12 background_color_white1 py-3 "  id="style-1"> 
        <h5>
          <b>Tickets Module</b>
        </h5>

        <Tabswitch />
      </div>
    </div>
  )
}

export default Tickets
