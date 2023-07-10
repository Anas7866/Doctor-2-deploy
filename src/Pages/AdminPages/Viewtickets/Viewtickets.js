import React, { useEffect } from 'react'
import "../DashboardAdmin/Dashboard.scss"
import {useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { viewticketdetail } from '../../../Store/Auth/actions';
import "../Tickets/Ticket.scss"
import Moment from 'react-moment';
import 'moment-timezone';

function Viewtickets() {
    let { id } = useParams();
    let number = parseInt(id);
    let dispatch = useDispatch();
    console.log("<><><><><><><><><><><><><><<",number)
    const userviewticket = useSelector((state) => state.Auth?.viewallticketsuser?.request);
    const requestdata = useSelector((state) => state.Auth?.viewallticketsuser?.request_user_submitted_data);
    useEffect(() => {
        dispatch(viewticketdetail({
            id: number,
        }));
  }, [])
  console.log(".,.,.,.,.,.,.,.",userviewticket)
  return (
    <div className='col-md-12 pt-4'>
    <div className='col-md-12 background_color_white1' id="style-1">
      <h3><b>View Ticket</b></h3>
      <div className='col-md-12 background_shadow_box py-3 mt-4'>
      <h5><b>User Detail</b></h5>
      <div className='row mt-4'>
        <div className='col-md-2'>
        {userviewticket?.request?.is_sub_user === false ?
          <img className='img-fluid ticket_onew' src={`https://backend.h3lth.net${userviewticket?.request?.mainuser?.profileImg}`} />:
          <img className='img-fluid ticket_onew' src={`https://backend.h3lth.net${userviewticket?.request?.user?.profileImg}`} />
        }
        </div>
        <div className='col-md-10'>
          <p className='mb-1'><b>Name:</b>&nbsp;
          {userviewticket?.request?.is_sub_user === false ?
         <>{userviewticket?.request?.mainuser?.user?.name} </> :
         <>{userviewticket?.request?.user?.name} </> 
          }
          </p>
          <p className='mb-1'><b>Height:</b>&nbsp;
          {userviewticket?.request?.is_sub_user === false ?
          <>{userviewticket?.request?.mainuser?.height} {userviewticket?.request?.mainuser?.height_unit} </>:
          <>{userviewticket?.request?.user?.height} {userviewticket?.request?.user?.height_unit} </> 
          }
          </p>
          <p className='mb-1'><b>Weight:</b>&nbsp;
          {userviewticket?.request?.is_sub_user === false ?
          <>{userviewticket?.request?.mainuser?.weight} {userviewticket?.request?.mainuser?.weight_unit}</>  :
          <>{userviewticket?.request?.user?.weight} {userviewticket?.request?.user?.weight_unit}</> 
          }
           </p>
        </div>
      </div>
      </div>
      <div className='col-md-12 background_shadow_box py-3 mt-4'>
      <h5><b>Ticket Details</b></h5>
      <div className='row mt-4'>
        <div className='col-md-2'>
          <img className='img-fluid ticket_onew' src={`https://backend.h3lth.net${userviewticket?.request?.form?.category?.image}`} />
        </div>
        <div className='col-md-10'>
          <p className='mb-1'><b>Form Title:</b> {userviewticket?.request?.form?.category?.title}</p>
          <p className='mb-1'><b>Ticket Id:</b> {userviewticket?.request?.form?.id} </p>
          <p className='mb-1'><b>Category:</b> {userviewticket?.request?.form?.title} </p>
          <p className='mb-1'><b>Date Time:</b>&nbsp;
          <Moment format="YYYY-MM-DD / HH:mm:ss A" >
           {userviewticket?.created_date}
           </Moment>
          </p>
        </div>
      </div>
      </div>
      <div className='col-md-12 background_shadow_box py-3 mt-4 mb-4'>
      <h5 ><b>Questions / Answers</b></h5>
      {requestdata?.map((item,index)=>{
        return(
          <>
      <p className='mb-1 mt-3'><b>Question: </b>{item?.question?.question}</p>
      {item?.typeQ === "Document" ?  
      <a href={`https://backend.h3lth.net${item?.answer}`} target='_blank' className='text_dec_none'>
      <p className='my-3'>
      <img className='img-fluid show_doc1' src={`https://backend.h3lth.net${item?.answer}`} /><br/>
      <b className='mb-1 badge badge-info'>Document Click To Open </b></p> 
      </a>
      :
      <p className='mb-1'><b>Answer: </b>{item?.answer}</p> }
      </>
        )
      })}
      
      </div>
     
      {/* {userviewticket?.map((item, index) => {
        return(
            <p>{item?.created_date}</p>
        )
      })} */}
    </div>
    </div>
  )
}

export default Viewtickets
