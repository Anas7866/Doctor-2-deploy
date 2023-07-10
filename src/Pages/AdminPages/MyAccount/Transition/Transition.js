import React from 'react'
import '../../Tickets/Ticket.scss'
import TabswitchTransition from './TransitionTabs'

function Transition() {
  return (
    <div className="col-md-12 mt-2  px-md-0">
      <div className="col-md-12 px-0 ">
        <h4>
          <b>Transition Details</b>
        </h4>

        <TabswitchTransition />
      </div>
    </div>
  )
}

export default Transition
